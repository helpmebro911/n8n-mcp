import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { N8nApiClient } from '@/services/n8n-api-client';
import { N8nApiError } from '@/utils/n8n-errors';

// Mock dependencies
vi.mock('@/services/n8n-api-client');
vi.mock('@/config/n8n-api', () => ({
  getN8nApiConfig: vi.fn(),
}));
vi.mock('@/services/n8n-validation', () => ({
  validateWorkflowStructure: vi.fn(),
  hasWebhookTrigger: vi.fn(),
  getWebhookUrl: vi.fn(),
}));
vi.mock('@/utils/logger', () => ({
  logger: {
    info: vi.fn(),
    error: vi.fn(),
    debug: vi.fn(),
    warn: vi.fn(),
  },
  Logger: vi.fn().mockImplementation(() => ({
    info: vi.fn(),
    error: vi.fn(),
    debug: vi.fn(),
    warn: vi.fn(),
  })),
  LogLevel: {
    ERROR: 0,
    WARN: 1,
    INFO: 2,
    DEBUG: 3,
  },
}));

describe('handleCreateDataTable', () => {
  let mockApiClient: any;
  let handlers: any;
  let getN8nApiConfig: any;

  beforeEach(async () => {
    vi.clearAllMocks();

    // Setup mock API client
    mockApiClient = {
      createWorkflow: vi.fn(),
      getWorkflow: vi.fn(),
      updateWorkflow: vi.fn(),
      deleteWorkflow: vi.fn(),
      listWorkflows: vi.fn(),
      triggerWebhook: vi.fn(),
      getExecution: vi.fn(),
      listExecutions: vi.fn(),
      deleteExecution: vi.fn(),
      healthCheck: vi.fn(),
      createDataTable: vi.fn(),
    };

    // Import mocked modules
    getN8nApiConfig = (await import('@/config/n8n-api')).getN8nApiConfig;

    // Mock the API config
    vi.mocked(getN8nApiConfig).mockReturnValue({
      baseUrl: 'https://n8n.test.com',
      apiKey: 'test-key',
      timeout: 30000,
      maxRetries: 3,
    });

    // Mock the N8nApiClient constructor
    vi.mocked(N8nApiClient).mockImplementation(() => mockApiClient);

    // Import handlers module after setting up mocks
    handlers = await import('@/mcp/handlers-n8n-manager');
  });

  afterEach(() => {
    if (handlers) {
      const clientGetter = handlers.getN8nApiClient;
      if (clientGetter) {
        vi.mocked(getN8nApiConfig).mockReturnValue(null);
        clientGetter();
      }
    }
  });

  it('should create data table with name and columns successfully', async () => {
    const createdTable = {
      id: 'dt-123',
      name: 'My Data Table',
      columns: [
        { id: 'col-1', name: 'email', type: 'string', index: 0 },
        { id: 'col-2', name: 'age', type: 'number', index: 1 },
      ],
    };

    mockApiClient.createDataTable.mockResolvedValue(createdTable);

    const result = await handlers.handleCreateDataTable({
      name: 'My Data Table',
      columns: [
        { name: 'email', type: 'string' },
        { name: 'age', type: 'number' },
      ],
    });

    expect(result).toEqual({
      success: true,
      data: { id: 'dt-123', name: 'My Data Table' },
      message: 'Data table "My Data Table" created with ID: dt-123',
    });

    expect(mockApiClient.createDataTable).toHaveBeenCalledWith({
      name: 'My Data Table',
      columns: [
        { name: 'email', type: 'string' },
        { name: 'age', type: 'number' },
      ],
    });
  });

  it('should create data table with name only (no columns)', async () => {
    const createdTable = {
      id: 'dt-456',
      name: 'Empty Table',
    };

    mockApiClient.createDataTable.mockResolvedValue(createdTable);

    const result = await handlers.handleCreateDataTable({
      name: 'Empty Table',
    });

    expect(result).toEqual({
      success: true,
      data: { id: 'dt-456', name: 'Empty Table' },
      message: 'Data table "Empty Table" created with ID: dt-456',
    });

    expect(mockApiClient.createDataTable).toHaveBeenCalledWith({
      name: 'Empty Table',
    });
  });

  it('should return error when n8n API is not configured', async () => {
    vi.mocked(getN8nApiConfig).mockReturnValue(null);

    const result = await handlers.handleCreateDataTable({
      name: 'Test Table',
    });

    expect(result).toEqual({
      success: false,
      error: 'n8n API not configured. Please set N8N_API_URL and N8N_API_KEY environment variables.',
    });
  });

  it('should return Zod validation error when name is missing', async () => {
    const result = await handlers.handleCreateDataTable({});

    expect(result.success).toBe(false);
    expect(result.error).toBe('Invalid input');
    expect(result.details).toHaveProperty('errors');
  });

  it('should return Zod validation error when name is empty string', async () => {
    const result = await handlers.handleCreateDataTable({ name: '' });

    expect(result.success).toBe(false);
    expect(result.error).toBe('Invalid input');
    expect(result.details).toHaveProperty('errors');
  });

  it('should return Zod validation error when column name is empty string', async () => {
    const result = await handlers.handleCreateDataTable({
      name: 'Valid Table',
      columns: [{ name: '' }],
    });

    expect(result.success).toBe(false);
    expect(result.error).toBe('Invalid input');
    expect(result.details).toHaveProperty('errors');
  });

  it('should return error when API call fails', async () => {
    const apiError = new Error('Data table creation failed on the server');
    mockApiClient.createDataTable.mockRejectedValue(apiError);

    const result = await handlers.handleCreateDataTable({
      name: 'Duplicate Table',
    });

    expect(result).toEqual({
      success: false,
      error: 'Data table creation failed on the server',
    });
  });

  it('should return structured error for N8nApiError', async () => {
    const apiError = new N8nApiError('Feature not available', 402, 'PAYMENT_REQUIRED', { plan: 'enterprise' });
    mockApiClient.createDataTable.mockRejectedValue(apiError);

    const result = await handlers.handleCreateDataTable({
      name: 'Enterprise Table',
    });

    expect(result.success).toBe(false);
    expect(result.error).toBeDefined();
    expect(result.code).toBe('PAYMENT_REQUIRED');
    expect(result.details).toEqual({ plan: 'enterprise' });
  });

  it('should return error when API returns empty response (null)', async () => {
    mockApiClient.createDataTable.mockResolvedValue(null);

    const result = await handlers.handleCreateDataTable({
      name: 'Ghost Table',
    });

    expect(result).toEqual({
      success: false,
      error: 'Data table creation failed: n8n API returned an empty or invalid response',
    });
  });

  it('should return error when API returns response without id', async () => {
    mockApiClient.createDataTable.mockResolvedValue({ name: 'No ID Table' });

    const result = await handlers.handleCreateDataTable({
      name: 'No ID Table',
    });

    expect(result).toEqual({
      success: false,
      error: 'Data table creation failed: n8n API returned an empty or invalid response',
    });
  });

  it('should return Unknown error when a non-Error value is thrown', async () => {
    mockApiClient.createDataTable.mockRejectedValue('string-error');

    const result = await handlers.handleCreateDataTable({
      name: 'Error Table',
    });

    expect(result).toEqual({
      success: false,
      error: 'Unknown error occurred',
    });
  });
});
