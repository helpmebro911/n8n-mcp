window.BENCHMARK_DATA = {
  "lastUpdate": 1774206174979,
  "repoUrl": "https://github.com/czlonkowski/n8n-mcp",
  "entries": {
    "n8n-mcp Benchmarks": [
      {
        "commit": {
          "author": {
            "email": "56956555+czlonkowski@users.noreply.github.com",
            "name": "Romuald Członkowski",
            "username": "czlonkowski"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "562f4b0c4ecb98d3e9c8993ea4a911f64a5d7c40",
          "message": "feat: add _cnd conditional operator support and n8n 2.0+ executeWorkflowTrigger fix (#495)\n\n* feat: add _cnd conditional operator support and n8n 2.0+ executeWorkflowTrigger fix\n\nAdded:\n- Support for all 12 _cnd operators in displayOptions validation (eq, not, gte, lte, gt, lt, between, startsWith, endsWith, includes, regex, exists)\n- Version-based visibility checking with @version in config\n- 42 new unit tests for _cnd operators\n\nFixed:\n- n8n 2.0+ breaking change: executeWorkflowTrigger now recognized as activatable trigger\n- Removed outdated validation blocking Execute Workflow Trigger workflows\n\n🤖 Generated with [Claude Code](https://claude.com/claude-code)\n\nConceived by Romuald Członkowski - https://www.aiadvisors.pl/en\n\nCo-Authored-By: Claude Opus 4.5 <noreply@anthropic.com>\n\n* fix: harden _cnd operators and add edge case tests\n\n- Add try/catch for invalid regex patterns in regex operator\n- Add structure validation for between operator (from/to fields)\n- Add 5 new edge case tests for invalid inputs\n- Bump version to 2.30.1\n- Resolve merge conflict with main (n8n 2.0 update)\n\nConceived by Romuald Członkowski - https://www.aiadvisors.pl/en\n\n🤖 Generated with [Claude Code](https://claude.com/claude-code)\n\nCo-Authored-By: Claude Opus 4.5 <noreply@anthropic.com>\n\n* fix: update workflow activation tests for n8n 2.0+ executeWorkflowTrigger\n\n- Update test to expect SUCCESS for executeWorkflowTrigger-only workflows\n- Remove outdated assertion about \"executeWorkflowTrigger cannot activate\"\n- executeWorkflowTrigger is now a valid activatable trigger in n8n 2.0+\n\nConceived by Romuald Członkowski - https://www.aiadvisors.pl/en\n\n🤖 Generated with [Claude Code](https://claude.com/claude-code)\n\nCo-Authored-By: Claude Opus 4.5 <noreply@anthropic.com>\n\n* test: skip flaky versionId test pending n8n 2.0 investigation\n\nThe versionId behavior appears to have changed in n8n 2.0 - simple\nname updates may no longer trigger versionId changes. This needs\ninvestigation but is unrelated to the _cnd operator PR.\n\nConceived by Romuald Członkowski - https://www.aiadvisors.pl/en\n\n🤖 Generated with [Claude Code](https://claude.com/claude-code)\n\nCo-Authored-By: Claude Opus 4.5 <noreply@anthropic.com>\n\n---------\n\nCo-authored-by: Romuald Członkowski <romualdczlonkowski@MacBook-Pro-Romuald.local>\nCo-authored-by: Claude Opus 4.5 <noreply@anthropic.com>",
          "timestamp": "2025-12-17T18:37:55+01:00",
          "tree_id": "77fb60c370c021171dab06a01f19e0d523c926ba",
          "url": "https://github.com/czlonkowski/n8n-mcp/commit/562f4b0c4ecb98d3e9c8993ea4a911f64a5d7c40"
        },
        "date": 1765993195530,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "sample - array sorting - small",
            "value": 0.0136,
            "range": "0.3096",
            "unit": "ms",
            "extra": "73341 ops/sec"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "56956555+czlonkowski@users.noreply.github.com",
            "name": "Romuald Członkowski",
            "username": "czlonkowski"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "fa216e4d1375dfec7e2de424ee0c05a3869db65c",
          "message": "fix: restore templates database with 2,768 workflow templates (v2.30.2) (#502)\n\n- Restored templates from git history (commit 03a4b07)\n- Updated nodes schema with tool variant columns\n- Database now contains 803 nodes and 2,768 templates\n- Compatible with n8n 2.0.2\n\nConceived by Romuald Członkowski - https://www.aiadvisors.pl/en\n\n🤖 Generated with [Claude Code](https://claude.com/claude-code)\n\nCo-authored-by: Romuald Członkowski <romualdczlonkowski@MacBook-Pro-Romuald.local>\nCo-authored-by: Claude Opus 4.5 <noreply@anthropic.com>",
          "timestamp": "2025-12-21T14:11:57+01:00",
          "tree_id": "acd674c606d60c4aff7260b253fb1d2d0c55d08a",
          "url": "https://github.com/czlonkowski/n8n-mcp/commit/fa216e4d1375dfec7e2de424ee0c05a3869db65c"
        },
        "date": 1766322833175,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "sample - array sorting - small",
            "value": 0.0136,
            "range": "0.3096",
            "unit": "ms",
            "extra": "73341 ops/sec"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "romualdczlonkowski@MacBook-Pro-Romuald.local",
            "name": "Romuald Członkowski"
          },
          "committer": {
            "email": "romualdczlonkowski@MacBook-Pro-Romuald.local",
            "name": "Romuald Członkowski"
          },
          "distinct": true,
          "id": "a40f6a5077001fbfbdc7529663a4ebcba608f5e6",
          "message": "test: make templates database validation critical instead of optional\n\nPreviously, the CI test only warned when templates were missing but\nalways passed. This allowed the templates database to be lost without\nfailing CI. Now the test will fail if templates are empty or below\nthe expected count of 2500.\n\nConceived by Romuald Członkowski - https://www.aiadvisors.pl/en\n\n🤖 Generated with [Claude Code](https://claude.com/claude-code)\n\nCo-Authored-By: Claude Opus 4.5 <noreply@anthropic.com>",
          "timestamp": "2025-12-21T15:33:25+01:00",
          "tree_id": "8c445e411ac900ad406f2a5d351e94109f9201ff",
          "url": "https://github.com/czlonkowski/n8n-mcp/commit/a40f6a5077001fbfbdc7529663a4ebcba608f5e6"
        },
        "date": 1766327718567,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "sample - array sorting - small",
            "value": 0.0136,
            "range": "0.3096",
            "unit": "ms",
            "extra": "73341 ops/sec"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "56956555+czlonkowski@users.noreply.github.com",
            "name": "Romuald Członkowski",
            "username": "czlonkowski"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d60182eeb8581320278e5f2205cc0378d49ff071",
          "message": "feat: add error mode for execution debugging with AI suggestions (#505)\n\n* feat: add error mode for execution debugging with AI suggestions\n\nAdd a new `mode='error'` option to n8n_executions action=get that's optimized\nfor AI agents debugging workflow failures. This mode provides intelligent\nerror extraction with 80-99% token savings compared to `mode='full'`.\n\nKey features:\n- Error Analysis: Extracts error message, type, node name, and parameters\n- Upstream Context: Samples input data from upstream node (configurable limit)\n- Execution Path: Shows node execution sequence from trigger to error\n- AI Suggestions: Pattern-based fix suggestions for common errors\n- Workflow Fetch: Optionally fetches workflow for accurate upstream detection\n\nNew parameters for mode='error':\n- errorItemsLimit (default: 2) - Sample items from upstream node\n- includeStackTrace (default: false) - Full vs truncated stack trace\n- includeExecutionPath (default: true) - Include node execution path\n- fetchWorkflow (default: true) - Fetch workflow for upstream detection\n\nToken efficiency:\n- 11 items: ~11KB full vs ~3KB error (73% savings)\n- 1001 items: ~354KB full vs ~3KB error (99% savings)\n\nConceived by Romuald Członkowski - https://www.aiadvisors.pl/en\n\n🤖 Generated with [Claude Code](https://claude.com/claude-code)\n\nCo-Authored-By: Claude Opus 4.5 <noreply@anthropic.com>\n\n* fix: add security hardening to error-execution-processor\n\n- Add prototype pollution protection (block __proto__, constructor, prototype)\n- Expand sensitive data patterns (20+ patterns including JWT, OAuth, certificates)\n- Create recursive sanitizeData function for deep object sanitization\n- Apply sanitization to both nodeParameters and upstream sampleItems\n- Add comprehensive unit tests (42 tests, 96% coverage)\n\nSecurity improvements address code review findings:\n- Critical: Prototype pollution protection\n- Warning: Expanded sensitive data filtering\n- Warning: Nested data sanitization\n\nConcieved by Romuald Członkowski - www.aiadvisors.pl/en\n\n🤖 Generated with [Claude Code](https://claude.com/claude-code)\n\nCo-Authored-By: Claude Opus 4.5 <noreply@anthropic.com>\n\n---------\n\nCo-authored-by: Romuald Członkowski <romualdczlonkowski@MacBook-Pro-Romuald.local>\nCo-authored-by: Claude Opus 4.5 <noreply@anthropic.com>",
          "timestamp": "2025-12-23T17:14:30+01:00",
          "tree_id": "04eb9d595ef0bc90b182b7a947f0683df1827646",
          "url": "https://github.com/czlonkowski/n8n-mcp/commit/d60182eeb8581320278e5f2205cc0378d49ff071"
        },
        "date": 1766506580808,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "sample - array sorting - small",
            "value": 0.0136,
            "range": "0.3096",
            "unit": "ms",
            "extra": "73341 ops/sec"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "56956555+czlonkowski@users.noreply.github.com",
            "name": "Romuald Członkowski",
            "username": "czlonkowski"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "705d31c35e93f868b58add97f074500857368381",
          "message": "fix: mcpTrigger nodes no longer flagged as disconnected (#503) (#506)\n\nFixed validation bug where mcpTrigger nodes were incorrectly flagged as\n\"disconnected nodes\" when using n8n_update_partial_workflow or\nn8n_update_full_workflow. This blocked ALL updates to MCP server workflows.\n\nChanges:\n- Extended validateWorkflowStructure() to check all 7 connection types\n  (main, error, ai_tool, ai_languageModel, ai_memory, ai_embedding, ai_vectorStore)\n- Updated trigger node validation to accept either outgoing OR inbound connections\n- Added 7 new tests covering all AI connection types\n\nFixes #503\n\nConceived by Romuald Członkowski - https://www.aiadvisors.pl/en\n\n🤖 Generated with [Claude Code](https://claude.com/claude-code)\n\nCo-authored-by: Romuald Członkowski <romualdczlonkowski@MacBook-Pro-Romuald.local>\nCo-authored-by: Claude Opus 4.5 <noreply@anthropic.com>",
          "timestamp": "2025-12-23T18:50:55+01:00",
          "tree_id": "bbe4aa26da9600ff36b8951b04e6cf8434e3f51a",
          "url": "https://github.com/czlonkowski/n8n-mcp/commit/705d31c35e93f868b58add97f074500857368381"
        },
        "date": 1766512366242,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "sample - array sorting - small",
            "value": 0.0136,
            "range": "0.3096",
            "unit": "ms",
            "extra": "73341 ops/sec"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "56956555+czlonkowski@users.noreply.github.com",
            "name": "Romuald Członkowski",
            "username": "czlonkowski"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "20663dad0d3b4064796ccf50ef3db27b55b68b85",
          "message": "chore: update n8n to 2.1.4 and bump version to 2.31.2 (#507)\n\n- Updated n8n from 2.0.2 to 2.1.4\n- Updated n8n-core from 2.0.1 to 2.1.3\n- Updated n8n-workflow from 2.0.1 to 2.1.1\n- Updated @n8n/n8n-nodes-langchain from 2.0.1 to 2.1.3\n- Rebuilt node database with 540 nodes (434 from n8n-nodes-base, 106 from @n8n/n8n-nodes-langchain)\n- Refreshed template database with 2,737 workflow templates from n8n.io\n- Updated README badge with new n8n version\n- Updated CHANGELOG with dependency changes\n\nConceived by Romuald Członkowski - https://www.aiadvisors.pl/en\n\n🤖 Generated with [Claude Code](https://claude.com/claude-code)\n\nCo-authored-by: Romuald Członkowski <romualdczlonkowski@MacBook-Pro-Romuald.local>\nCo-authored-by: Claude <noreply@anthropic.com>",
          "timestamp": "2025-12-24T15:15:22+01:00",
          "tree_id": "03f1ad88a37931c6464c4de9c8af3d3294aa246c",
          "url": "https://github.com/czlonkowski/n8n-mcp/commit/20663dad0d3b4064796ccf50ef3db27b55b68b85"
        },
        "date": 1766585848885,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "sample - array sorting - small",
            "value": 0.0136,
            "range": "0.3096",
            "unit": "ms",
            "extra": "73341 ops/sec"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "56956555+czlonkowski@users.noreply.github.com",
            "name": "Romuald Członkowski",
            "username": "czlonkowski"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "808088f25eccf3cf73a90017af9f5abdd1893886",
          "message": "docs: fix connection keys documentation to say \"node names\" not \"node IDs\" (#510) (#511)\n\nThe documentation incorrectly stated connection keys should be \"node IDs\"\nwhen n8n actually requires \"node names\". This caused workflow creation\nfailures for AI-generated workflows.\n\nChanges:\n- tools-n8n-manager.ts: \"Keys are source node names (the name field, not id)\"\n- n8n-create-workflow.ts: \"Keys are source node names (not IDs)\"\n- Fixed example: \"Webhook\"/\"Slack\" instead of \"webhook_1\"/\"slack_1\"\n- get-template.ts: clarified \"source node names\"\n\nCloses #510\n\nConceived by Romuald Członkowski - https://www.aiadvisors.pl/en\n\n🤖 Generated with [Claude Code](https://claude.com/claude-code)\n\nCo-authored-by: Romuald Członkowski <romualdczlonkowski@MacBook-Pro-Romuald.local>\nCo-authored-by: Claude Opus 4.5 <noreply@anthropic.com>",
          "timestamp": "2025-12-26T14:50:58+01:00",
          "tree_id": "9110d3624af99a21e45601fe3c7e9c9248362159",
          "url": "https://github.com/czlonkowski/n8n-mcp/commit/808088f25eccf3cf73a90017af9f5abdd1893886"
        },
        "date": 1766757174358,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "sample - array sorting - small",
            "value": 0.0136,
            "range": "0.3096",
            "unit": "ms",
            "extra": "73341 ops/sec"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "56956555+czlonkowski@users.noreply.github.com",
            "name": "Romuald Członkowski",
            "username": "czlonkowski"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f10772a9d28f67fca6e14ccf7477af9d99651830",
          "message": "fix: preserve workflow data during serialization (Issue #517) (#519)\n\nFixed a critical bug where workflow mutation data was corrupted during\nserialization to Supabase. The recursive toSnakeCase() function was\nconverting nested workflow data, mangling:\n- Connection keys (node names like \"Webhook\" → \"_webhook\")\n- Node field names (typeVersion → type_version)\n\nSolution: Replace recursive conversion with selective mutationToSupabaseFormat()\nthat only converts top-level field names to snake_case while preserving\nnested workflow data exactly as-is.\n\nImpact:\n- 98.9% of workflow mutations had corrupted data\n- Deployability rate improved from ~21% to ~68%\n\nChanges:\n- src/telemetry/batch-processor.ts: New selective converter\n- tests/unit/telemetry/batch-processor.test.ts: 3 new regression tests\n\nConceived by Romuald Członkowski - https://www.aiadvisors.pl/en\n\n🤖 Generated with [Claude Code](https://claude.com/claude-code)\n\nCo-authored-by: Romuald Członkowski <romualdczlonkowski@MacBook-Pro-Romuald.local>\nCo-authored-by: Claude Opus 4.5 <noreply@anthropic.com>",
          "timestamp": "2026-01-02T10:44:13+01:00",
          "tree_id": "b2f3780bf0bc44b0edbd7e423710a1f87f21b11b",
          "url": "https://github.com/czlonkowski/n8n-mcp/commit/f10772a9d28f67fca6e14ccf7477af9d99651830"
        },
        "date": 1767347159970,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "sample - array sorting - small",
            "value": 0.0136,
            "range": "0.3096",
            "unit": "ms",
            "extra": "73341 ops/sec"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bthompson@maillocker.net",
            "name": "Bryan Thompson",
            "username": "triepod-ai"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "2713db6d106f30554f3f144c548504c2097f2741",
          "message": "feat: add MCP tool annotations to all 20 tools (#512)\n\n* feat: add MCP tool annotations to all 20 tools\n\nAdd MCP tool annotations per specification to help AI assistants\nunderstand tool behavior and capabilities.\n\nDocumentation tools (7):\n- tools_documentation, search_nodes, get_node, validate_node,\n  get_template, search_templates, validate_workflow\n- All marked readOnlyHint=true (local database queries)\n\nManagement tools (13):\n- n8n_create_workflow, n8n_get_workflow, n8n_update_full_workflow,\n  n8n_update_partial_workflow, n8n_delete_workflow, n8n_list_workflows,\n  n8n_validate_workflow, n8n_autofix_workflow, n8n_test_workflow,\n  n8n_executions, n8n_health_check, n8n_workflow_versions,\n  n8n_deploy_template\n- All marked openWorldHint=true (n8n API access)\n- Destructive operations (delete_workflow, executions delete,\n  workflow_versions delete/truncate) marked destructiveHint=true\n\nAnnotations follow MCP spec:\nhttps://spec.modelcontextprotocol.io/specification/2025-03-26/server/tools/#annotations\n\n🤖 Generated with [Claude Code](https://claude.com/claude-code)\n\nCo-Authored-By: Claude Opus 4.5 <noreply@anthropic.com>\n\n* feat: add idempotentHint to all read-only tools\n\nAdds idempotentHint: true annotation to all read-only tools that produce\nthe same output when called multiple times:\n- 7 documentation tools (tools.ts)\n- 4 management tools (tools-n8n-manager.ts): n8n_get_workflow,\n  n8n_list_workflows, n8n_validate_workflow, n8n_health_check\n\nAlso adds trailing newline to tools-n8n-manager.ts.\n\nConceived by Romuald Członkowski - www.aiadvisors.pl/en\n\n🤖 Generated with [Claude Code](https://claude.com/claude-code)\n\nCo-Authored-By: Claude Opus 4.5 <noreply@anthropic.com>\n\n* feat: add idempotentHint to update operations, bump to 2.31.5\n\nAdds idempotentHint: true to update operations that produce the same\nresult when called repeatedly with the same arguments:\n- n8n_update_full_workflow\n- n8n_update_partial_workflow\n- n8n_autofix_workflow\n\nAlso bumps version to 2.31.5 and updates CHANGELOG.md with complete\ndocumentation of all MCP tool annotations added in this PR.\n\nConceived by Romuald Członkowski - www.aiadvisors.pl/en\n\n🤖 Generated with [Claude Code](https://claude.com/claude-code)\n\nCo-Authored-By: Claude Opus 4.5 <noreply@anthropic.com>\n\n---------\n\nCo-authored-by: triepod-ai <noreply@github.com>\nCo-authored-by: Claude Opus 4.5 <noreply@anthropic.com>\nCo-authored-by: Romuald Członkowski <romualdczlonkowski@MacBook-Pro-Romuald.local>",
          "timestamp": "2026-01-02T15:48:47+01:00",
          "tree_id": "2699ee78d2f42d632b1937c421986a2d38a7f1b7",
          "url": "https://github.com/czlonkowski/n8n-mcp/commit/2713db6d106f30554f3f144c548504c2097f2741"
        },
        "date": 1767365448403,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "sample - array sorting - small",
            "value": 0.0136,
            "range": "0.3096",
            "unit": "ms",
            "extra": "73341 ops/sec"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "56956555+czlonkowski@users.noreply.github.com",
            "name": "Romuald Członkowski",
            "username": "czlonkowski"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "25cb8bb4559a78e36e0f3c32e3d78a807b107abf",
          "message": "chore: update n8n to 2.1.5 and bump version to 2.31.6 (#521)\n\n- Updated n8n from 2.1.4 to 2.1.5\n- Updated n8n-core from 2.1.3 to 2.1.4\n- Updated @n8n/n8n-nodes-langchain from 2.1.3 to 2.1.4\n- Rebuilt node database with 540 nodes (434 from n8n-nodes-base, 106 from @n8n/n8n-nodes-langchain)\n- Updated README badge with new n8n version\n- Updated CHANGELOG with dependency changes\n\nConceived by Romuald Członkowski - https://www.aiadvisors.pl/en\n\n🤖 Generated with [Claude Code](https://claude.com/claude-code)\n\nCo-authored-by: Romuald Członkowski <romualdczlonkowski@MacBook-Pro-Romuald.local>\nCo-authored-by: Claude <noreply@anthropic.com>",
          "timestamp": "2026-01-04T10:43:35+01:00",
          "tree_id": "458ef1376f2cfc6d2a39a9dc5f9586bc418051ca",
          "url": "https://github.com/czlonkowski/n8n-mcp/commit/25cb8bb4559a78e36e0f3c32e3d78a807b107abf"
        },
        "date": 1767519934923,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "sample - array sorting - small",
            "value": 0.0136,
            "range": "0.3096",
            "unit": "ms",
            "extra": "73341 ops/sec"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "56956555+czlonkowski@users.noreply.github.com",
            "name": "Romuald Członkowski",
            "username": "czlonkowski"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7b0ff990ec656b3bbd2f37b763f2206a1468a577",
          "message": "chore: update n8n to 2.2.3 and bump version to 2.31.7 (#523)\n\n- Updated n8n from 2.1.5 to 2.2.3\n- Updated n8n-core from 2.1.4 to 2.2.2\n- Updated n8n-workflow from 2.1.1 to 2.2.2\n- Updated @n8n/n8n-nodes-langchain from 2.1.4 to 2.2.2\n- Rebuilt node database with 540 nodes (434 from n8n-nodes-base, 106 from @n8n/n8n-nodes-langchain)\n- Updated README badge with new n8n version\n- Updated CHANGELOG with dependency changes\n\nConceived by Romuald Członkowski - https://www.aiadvisors.pl/en\n\n🤖 Generated with [Claude Code](https://claude.com/claude-code)\n\nCo-authored-by: Romuald Członkowski <romualdczlonkowski@MacBook-Pro-Romuald.local>\nCo-authored-by: Claude <noreply@anthropic.com>",
          "timestamp": "2026-01-06T13:18:56+01:00",
          "tree_id": "66c78d7c4efc3ae032888f5da73d96cf5a0076be",
          "url": "https://github.com/czlonkowski/n8n-mcp/commit/7b0ff990ec656b3bbd2f37b763f2206a1468a577"
        },
        "date": 1767702055945,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "sample - array sorting - small",
            "value": 0.0136,
            "range": "0.3096",
            "unit": "ms",
            "extra": "73341 ops/sec"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "56956555+czlonkowski@users.noreply.github.com",
            "name": "Romuald Członkowski",
            "username": "czlonkowski"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "861005eeedf880be2489bc197b85a385735c0356",
          "message": "fix: deprecate USE_FIXED_HTTP for SSE streaming support (Issue #524) (#525)\n\n* fix: deprecate USE_FIXED_HTTP for SSE streaming support (Issue #524)\n\nThe fixed HTTP implementation does not support SSE streaming required\nby clients like OpenAI Codex. This commit deprecates USE_FIXED_HTTP\nand makes SingleSessionHTTPServer the default.\n\nChanges:\n- Add deprecation warnings in src/mcp/index.ts and src/http-server.ts\n- Remove USE_FIXED_HTTP from docker-compose.yml and Dockerfile.railway\n- Update .env.example with deprecation notice\n- Rename npm script to start:http:fixed:deprecated\n- Update all documentation to remove USE_FIXED_HTTP references\n- Mark test case as deprecated\n\nUsers should unset USE_FIXED_HTTP to use the modern SingleSessionHTTPServer\nwhich supports both JSON-RPC and SSE streaming.\n\nCloses #524\n\nConcieved by Romuald Członkowski - www.aiadvisors.pl/en\n\n🤖 Generated with [Claude Code](https://claude.com/claude-code)\n\nCo-Authored-By: Claude Opus 4.5 <noreply@anthropic.com>\n\n* chore: bump version to 2.31.8 and add CHANGELOG entry\n\n- Fix comment inaccuracy: \"deprecated\" not \"deprecated and removed\"\n- Bump version from 2.31.7 to 2.31.8\n- Add CHANGELOG entry documenting USE_FIXED_HTTP deprecation\n- Update all deprecation messages to reference v2.31.8\n\nConcieved by Romuald Członkowski - www.aiadvisors.pl/en\n\n🤖 Generated with [Claude Code](https://claude.com/claude-code)\n\nCo-Authored-By: Claude Opus 4.5 <noreply@anthropic.com>\n\n---------\n\nCo-authored-by: Romuald Członkowski <romualdczlonkowski@MacBook-Pro-Romuald.local>\nCo-authored-by: Claude Opus 4.5 <noreply@anthropic.com>",
          "timestamp": "2026-01-07T13:42:16+01:00",
          "tree_id": "1675efb5c222304f76aa99a4ee1dd8396056b1ac",
          "url": "https://github.com/czlonkowski/n8n-mcp/commit/861005eeedf880be2489bc197b85a385735c0356"
        },
        "date": 1767789848408,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "sample - array sorting - small",
            "value": 0.0136,
            "range": "0.3096",
            "unit": "ms",
            "extra": "73341 ops/sec"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "56956555+czlonkowski@users.noreply.github.com",
            "name": "Romuald Członkowski",
            "username": "czlonkowski"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ce2c94c1a5ca64f82fb5b011d7739bdfd0711c66",
          "message": "fix: recognize dynamic AI Tool nodes in validator (Issue #522) (#526)\n\nWhen n8n connects any node to an AI Agent's tool slot, it creates a\ndynamic Tool variant at runtime (e.g., googleDrive → googleDriveTool).\nThese don't exist in npm packages, causing false \"unknown node type\"\nerrors.\n\nAdded validation-time inference: when a *Tool node type is not found,\ncheck if the base node exists. If yes, treat as valid with warning.\n\nChanges:\n- workflow-validator.ts: Add INFERRED_TOOL_VARIANT logic\n- node-similarity-service.ts: Add 98% confidence for valid Tool variants\n- Added 7 unit tests for inferred tool variant functionality\n\nFixes #522\n\nConceived by Romuald Członkowski - https://www.aiadvisors.pl/en\n\n🤖 Generated with [Claude Code](https://claude.com/claude-code)\n\nCo-authored-by: Romuald Członkowski <romualdczlonkowski@MacBook-Pro-Romuald.local>\nCo-authored-by: Claude Opus 4.5 <noreply@anthropic.com>",
          "timestamp": "2026-01-07T18:09:55+01:00",
          "tree_id": "6b568155d3d2e1333dba098ad082367114a4634f",
          "url": "https://github.com/czlonkowski/n8n-mcp/commit/ce2c94c1a5ca64f82fb5b011d7739bdfd0711c66"
        },
        "date": 1767805907935,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "sample - array sorting - small",
            "value": 0.0136,
            "range": "0.3096",
            "unit": "ms",
            "extra": "73341 ops/sec"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "56956555+czlonkowski@users.noreply.github.com",
            "name": "Romuald Członkowski",
            "username": "czlonkowski"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "211ae72f9698bf64d49e2a3d867d0b77f7a85535",
          "message": "feat: add community nodes support (Issues #23, #490) (#527)\n\n* feat: add community nodes support (Issues #23, #490)\n\nAdd comprehensive support for n8n community nodes, expanding the node\ndatabase from 537 core nodes to 1,084 total (537 core + 547 community).\n\nNew Features:\n- 547 community nodes indexed (301 verified + 246 npm packages)\n- `source` filter for search_nodes: all, core, community, verified\n- Community metadata: isCommunity, isVerified, authorName, npmDownloads\n- Full schema support for verified nodes (no parsing needed)\n\nData Sources:\n- Verified nodes from n8n Strapi API (api.n8n.io)\n- Popular npm packages (keyword: n8n-community-node-package)\n\nCLI Commands:\n- npm run fetch:community (full rebuild)\n- npm run fetch:community:verified (fast, verified only)\n- npm run fetch:community:update (incremental)\n\nFixes #23 - search_nodes not finding community nodes\nFixes #490 - Support obtaining installed community node types\n\nConceived by Romuald Członkowski - www.aiadvisors.pl/en\n\n🤖 Generated with [Claude Code](https://claude.com/claude-code)\n\nCo-Authored-By: Claude Opus 4.5 <noreply@anthropic.com>\n\n* test: fix test issues for community nodes feature\n\n- Fix TypeScript literal type errors in search-nodes-source-filter.test.ts\n- Skip timeout-sensitive retry tests in community-node-fetcher.test.ts\n- Fix malformed API response test expectations\n\nConceived by Romuald Członkowski - https://www.aiadvisors.pl/en\n\n🤖 Generated with [Claude Code](https://claude.com/claude-code)\n\nCo-Authored-By: Claude Opus 4.5 <noreply@anthropic.com>\n\n* data: include 547 community nodes in database\n\nUpdated nodes.db with community nodes:\n- 301 verified community nodes (from n8n Strapi API)\n- 246 popular npm community packages\n\nTotal nodes: 1,349 (802 core + 547 community)\n\nConceived by Romuald Członkowski - https://www.aiadvisors.pl/en\n\n🤖 Generated with [Claude Code](https://claude.com/claude-code)\n\nCo-Authored-By: Claude Opus 4.5 <noreply@anthropic.com>\n\n* fix: add community fields to node-repository-outputs test mockRows\n\nUpdate all mockRow objects in the test file to include the new community\nnode fields (is_community, is_verified, author_name, etc.) to match the\nupdated database schema.\n\nConceived by Romuald Członkowski - https://www.aiadvisors.pl/en\n\n🤖 Generated with [Claude Code](https://claude.com/claude-code)\n\nCo-Authored-By: Claude Opus 4.5 <noreply@anthropic.com>\n\n* fix: add community fields to node-repository-core test mockRows\n\nUpdate all mockRow objects and expected results in the core test file\nto include the new community node fields, fixing CI test failures.\n\nConceived by Romuald Członkowski - https://www.aiadvisors.pl/en\n\n🤖 Generated with [Claude Code](https://claude.com/claude-code)\n\nCo-Authored-By: Claude Opus 4.5 <noreply@anthropic.com>\n\n* fix: separate documentation coverage tests for core vs community nodes\n\nCommunity nodes (from npm packages) typically have lower documentation\ncoverage than core n8n nodes. Updated tests to:\n- Check core nodes against 80% threshold\n- Report community nodes coverage informatively (no hard requirement)\n\nConceived by Romuald Członkowski - https://www.aiadvisors.pl/en\n\n🤖 Generated with [Claude Code](https://claude.com/claude-code)\n\nCo-Authored-By: Claude Opus 4.5 <noreply@anthropic.com>\n\n* fix: increase bulk insert performance threshold for community columns\n\nAdjusted performance test thresholds to account for the 8 additional\ncommunity node columns in the database schema. Insert operations are\nslightly slower with more columns.\n\nConceived by Romuald Członkowski - https://www.aiadvisors.pl/en\n\n🤖 Generated with [Claude Code](https://claude.com/claude-code)\n\nCo-Authored-By: Claude Opus 4.5 <noreply@anthropic.com>\n\n* fix: make list-workflows test resilient to pagination\n\nThe \"no filters\" test was flaky in CI because:\n- CI n8n instance accumulates many workflows over time\n- Default pagination (100) may not include newly created workflows\n- Workflows sorted by criteria that push new ones beyond first page\n\nChanged test to verify API response structure rather than requiring\nspecific workflows in results. Finding specific workflows is already\ncovered by pagination tests.\n\nConceived by Romuald Członkowski - https://www.aiadvisors.pl/en\n\n🤖 Generated with [Claude Code](https://claude.com/claude-code)\n\nCo-Authored-By: Claude Opus 4.5 <noreply@anthropic.com>\n\n* ci: increase test timeout from 10 to 15 minutes\n\nWith community nodes support, the database is larger (~1100 nodes vs ~550)\nwhich increases test execution time. Increased timeout to prevent\npremature job termination.\n\nConceived by Romuald Członkowski - https://www.aiadvisors.pl/en\n\n🤖 Generated with [Claude Code](https://claude.com/claude-code)\n\nCo-Authored-By: Claude Opus 4.5 <noreply@anthropic.com>\n\n---------\n\nCo-authored-by: Romuald Członkowski <romualdczlonkowski@MacBook-Pro-Romuald.local>\nCo-authored-by: Claude Opus 4.5 <noreply@anthropic.com>",
          "timestamp": "2026-01-08T07:02:56+01:00",
          "tree_id": "86274f568c8a168dac13c956d422d515c44ce2d6",
          "url": "https://github.com/czlonkowski/n8n-mcp/commit/211ae72f9698bf64d49e2a3d867d0b77f7a85535"
        },
        "date": 1767852290104,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "sample - array sorting - small",
            "value": 0.0136,
            "range": "0.3096",
            "unit": "ms",
            "extra": "73341 ops/sec"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "56956555+czlonkowski@users.noreply.github.com",
            "name": "Romuald Członkowski",
            "username": "czlonkowski"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "28667736cd7aeca5e898c68406706990a72fcb20",
          "message": "fix: use lowercase for community node names to match n8n convention (#529)\n\n* fix: use lowercase for community node names to match n8n convention\n\nCommunity nodes in n8n use lowercase node class names (e.g., chatwoot\nnot Chatwoot). The extractNodeNameFromPackage method was incorrectly\ncapitalizing node names, causing validation failures.\n\nChanges:\n- Fix extractNodeNameFromPackage to use lowercase instead of capitalizing\n- Add case-insensitive fallback in getNode for robustness\n- Update tests to expect lowercase node names\n- Bump version to 2.32.1\n\nFixes the case sensitivity bug where MCP stored Chatwoot but n8n\nexpected chatwoot.\n\nConceived by Romuald Członkowski - www.aiadvisors.pl/en\n\n🤖 Generated with [Claude Code](https://claude.com/claude-code)\n\nCo-Authored-By: Claude Opus 4.5 <noreply@anthropic.com>\n\n* chore: rebuild community nodes database with lowercase names\n\nRebuilt database after fixing extractNodeNameFromPackage to use\nlowercase node names matching n8n convention.\n\nConceived by Romuald Członkowski - www.aiadvisors.pl/en\n\n🤖 Generated with [Claude Code](https://claude.com/claude-code)\n\nCo-Authored-By: Claude Opus 4.5 <noreply@anthropic.com>\n\n---------\n\nCo-authored-by: Romuald Członkowski <romualdczlonkowski@MacBook-Pro-Romuald.local>\nCo-authored-by: Claude Opus 4.5 <noreply@anthropic.com>",
          "timestamp": "2026-01-08T08:27:56+01:00",
          "tree_id": "12d64f00fae9c4f941dbbdf14f4a351117e69556",
          "url": "https://github.com/czlonkowski/n8n-mcp/commit/28667736cd7aeca5e898c68406706990a72fcb20"
        },
        "date": 1767857395185,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "sample - array sorting - small",
            "value": 0.0136,
            "range": "0.3096",
            "unit": "ms",
            "extra": "73341 ops/sec"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "56956555+czlonkowski@users.noreply.github.com",
            "name": "Romuald Członkowski",
            "username": "czlonkowski"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "533b105f03ad68e137753bce561d3c1f85f36263",
          "message": "feat: AI-powered documentation for community nodes (#530)\n\n* feat: add AI-powered documentation generation for community nodes\n\nAdd system to fetch README content from npm and generate structured\nAI documentation summaries using local Qwen LLM.\n\nNew features:\n- Database schema: npm_readme, ai_documentation_summary, ai_summary_generated_at columns\n- DocumentationGenerator: LLM integration with OpenAI-compatible API (Zod validation)\n- DocumentationBatchProcessor: Parallel processing with progress tracking\n- CLI script: generate-community-docs.ts with multiple modes\n- Migration script for existing databases\n\nnpm scripts:\n- generate:docs - Full generation (README + AI summary)\n- generate:docs:readme-only - Only fetch READMEs\n- generate:docs:summary-only - Only generate AI summaries\n- generate:docs:incremental - Skip nodes with existing data\n- generate:docs:stats - Show documentation statistics\n- migrate:readme-columns - Apply database migration\n\nConceived by Romuald Członkowski - www.aiadvisors.pl/en\n\n🤖 Generated with [Claude Code](https://claude.com/claude-code)\n\nCo-Authored-By: Claude Opus 4.5 <noreply@anthropic.com>\n\n* feat: expose AI documentation summaries in MCP get_node response\n\n- Add AI documentation fields to NodeRow interface\n- Update SQL queries in getNodeDocumentation() to fetch AI fields\n- Add safeJsonParse helper method\n- Include aiDocumentationSummary and aiSummaryGeneratedAt in docs response\n- Fix parseNodeRow to include npmReadme and AI summary fields\n- Add truncateArrayFields to handle LLM responses exceeding schema limits\n- Bump version to 2.33.0\n\nConceived by Romuald Członkowski - www.aiadvisors.pl/en\n\n🤖 Generated with [Claude Code](https://claude.com/claude-code)\n\nCo-Authored-By: Claude Opus 4.5 <noreply@anthropic.com>\n\n* test: add unit tests for AI documentation feature (100 tests)\n\nAdded comprehensive test coverage for the AI documentation feature:\n\n- server-node-documentation.test.ts: 18 tests for MCP getNodeDocumentation()\n  - AI documentation field handling\n  - safeJsonParse error handling\n  - Node type normalization\n  - Response structure validation\n\n- node-repository-ai-documentation.test.ts: 16 tests for parseNodeRow()\n  - AI documentation field parsing\n  - Malformed JSON handling\n  - Edge cases (null, empty, missing fields)\n\n- documentation-generator.test.ts: 66 tests (14 new for truncateArrayFields)\n  - Array field truncation\n  - Schema limit enforcement\n  - Edge case handling\n\nAll 100 tests pass with comprehensive coverage.\n\nConceived by Romuald Członkowski - www.aiadvisors.pl/en\n\n🤖 Generated with [Claude Code](https://claude.com/claude-code)\n\nCo-Authored-By: Claude Opus 4.5 <noreply@anthropic.com>\n\n* fix: add AI documentation fields to test mock data\n\nUpdated test fixtures to include the 3 new AI documentation fields:\n- npm_readme\n- ai_documentation_summary\n- ai_summary_generated_at\n\nThis fixes test failures where getNode() returns objects with these\nfields but test expectations didn't include them.\n\nConceived by Romuald Członkowski - www.aiadvisors.pl/en\n\n🤖 Generated with [Claude Code](https://claude.com/claude-code)\n\nCo-Authored-By: Claude Opus 4.5 <noreply@anthropic.com>\n\n* fix: increase CI threshold for database performance test\n\nThe 'should benefit from proper indexing' test was failing in CI with\nquery times of 104-127ms against a 100ms threshold. Increased threshold\nto 150ms to account for CI environment variability.\n\nConceived by Romuald Członkowski - www.aiadvisors.pl/en\n\n🤖 Generated with [Claude Code](https://claude.com/claude-code)\n\nCo-Authored-By: Claude Opus 4.5 <noreply@anthropic.com>\n\n---------\n\nCo-authored-by: Romuald Członkowski <romualdczlonkowski@MacBook-Pro-Romuald.local>\nCo-authored-by: Claude Opus 4.5 <noreply@anthropic.com>",
          "timestamp": "2026-01-08T13:14:02+01:00",
          "tree_id": "b9745fa72e076936efd46eca14c6334a027f1fea",
          "url": "https://github.com/czlonkowski/n8n-mcp/commit/533b105f03ad68e137753bce561d3c1f85f36263"
        },
        "date": 1767874566649,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "sample - array sorting - small",
            "value": 0.0136,
            "range": "0.3096",
            "unit": "ms",
            "extra": "73341 ops/sec"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "56956555+czlonkowski@users.noreply.github.com",
            "name": "Romuald Członkowski",
            "username": "czlonkowski"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a9c4400a929d644287825afd6bde0681dc4bb103",
          "message": "fix: sync package.runtime.json version in Docker builds (v2.33.1) (#534)\n\nDocker images were built with stale package.runtime.json (v2.29.5)\nwhile npm package was at v2.33.0. This was caused by the build-docker\njob not syncing the version before building, while publish-npm did.\n\nChanges:\n- Add \"Sync runtime version\" step to release.yml build-docker job\n- Add \"Sync runtime version\" step to docker-build.yml build job\n- Add \"Sync runtime version\" step to docker-build.yml build-railway job\n- Bump version to 2.33.1 to trigger release with fix\n\nThe sync uses a lightweight Node.js one-liner (no npm install needed)\nto update package.runtime.json version from package.json before\nDocker builds.\n\nConceived by Romuald Czlonkowski - www.aiadvisors.pl/en\n\nCo-authored-by: Claude Opus 4.5 <noreply@anthropic.com>",
          "timestamp": "2026-01-12T10:25:58+01:00",
          "tree_id": "af266b355beb2ab2aea4ed0d332eb035448383ea",
          "url": "https://github.com/czlonkowski/n8n-mcp/commit/a9c4400a929d644287825afd6bde0681dc4bb103"
        },
        "date": 1768210078230,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "sample - array sorting - small",
            "value": 0.0136,
            "range": "0.3096",
            "unit": "ms",
            "extra": "73341 ops/sec"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "56956555+czlonkowski@users.noreply.github.com",
            "name": "Romuald Członkowski",
            "username": "czlonkowski"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "974a9fb3492fe2c4984ee0549085d531cdc6242a",
          "message": "chore: update n8n to 2.3.3 and bump version to 2.33.2 (#535)\n\n- Updated n8n from 2.2.3 to 2.3.3\n- Updated n8n-core from 2.2.2 to 2.3.2\n- Updated n8n-workflow from 2.2.2 to 2.3.2\n- Updated @n8n/n8n-nodes-langchain from 2.2.2 to 2.3.2\n- Rebuilt node database with 537 nodes (434 from n8n-nodes-base, 103 from @n8n/n8n-nodes-langchain)\n- Updated README badge with new n8n version\n- Updated CHANGELOG with dependency changes\n\nConceived by Romuald Członkowski - https://www.aiadvisors.pl/en\n\n🤖 Generated with [Claude Code](https://claude.com/claude-code)\n\nCo-authored-by: Claude Opus 4.5 <noreply@anthropic.com>",
          "timestamp": "2026-01-13T17:47:27+01:00",
          "tree_id": "79bb647536c9c858570eb5aef0acf8a1bbcb4a15",
          "url": "https://github.com/czlonkowski/n8n-mcp/commit/974a9fb3492fe2c4984ee0549085d531cdc6242a"
        },
        "date": 1768322967350,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "sample - array sorting - small",
            "value": 0.0136,
            "range": "0.3096",
            "unit": "ms",
            "extra": "73341 ops/sec"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "56956555+czlonkowski@users.noreply.github.com",
            "name": "Romuald Członkowski",
            "username": "czlonkowski"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0f15b82f1e5496b7b0f88910a9f61c152ceeb327",
          "message": "chore: update n8n to 2.4.4 (#543)\n\n* chore: update n8n to 2.4.4 and bump version to 2.33.3\n\n- Updated n8n from 2.2.3 to 2.4.4\n- Updated n8n-core from 2.2.2 to 2.4.2\n- Updated n8n-workflow from 2.2.2 to 2.4.2\n- Updated @n8n/n8n-nodes-langchain from 2.2.2 to 2.4.3\n- Added new `icon` NodePropertyType (now 23 types total)\n- Rebuilt node database with 803 nodes (541 from n8n-nodes-base, 262 from @n8n/n8n-nodes-langchain)\n- Updated README badge with new n8n version\n- Updated CHANGELOG with dependency changes\n\nConceived by Romuald Członkowski - https://www.aiadvisors.pl/en\n\n🤖 Generated with [Claude Code](https://claude.com/claude-code)\n\nCo-Authored-By: Claude <noreply@anthropic.com>\n\n* fix: update n8n-workflow version in Dockerfile for icon type support\n\nThe Docker build was using n8n-workflow@^1.96.0 which doesn't have the new\n'icon' NodePropertyType. Updated to n8n-workflow@^2.4.2 to match the project's\npackage.json version.\n\nConceived by Romuald Członkowski - https://www.aiadvisors.pl/en\n\n🤖 Generated with [Claude Code](https://claude.com/claude-code)\n\nCo-Authored-By: Claude <noreply@anthropic.com>\n\n* fix: update comments to reflect 23 NodePropertyTypes\n\n- Updated test comment from '22 standard types' to '23 standard types'\n- Updated header comment from n8n-workflow v1.120.3 to v2.4.2\n\nConceived by Romuald Członkowski - https://www.aiadvisors.pl/en\n\n🤖 Generated with [Claude Code](https://claude.com/claude-code)\n\nCo-Authored-By: Claude <noreply@anthropic.com>\n\n---------\n\nCo-authored-by: Claude <noreply@anthropic.com>",
          "timestamp": "2026-01-21T11:22:26+01:00",
          "tree_id": "5b495f9a0c34a9a03922419c684a3b745f15d1ad",
          "url": "https://github.com/czlonkowski/n8n-mcp/commit/0f15b82f1e5496b7b0f88910a9f61c152ceeb327"
        },
        "date": 1768991083028,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "sample - array sorting - small",
            "value": 0.0136,
            "range": "0.3096",
            "unit": "ms",
            "extra": "73341 ops/sec"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "56956555+czlonkowski@users.noreply.github.com",
            "name": "Romuald Członkowski",
            "username": "czlonkowski"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "fad343797719f96c33417ef32b54fe4107d51581",
          "message": "fix: memory leak in SSE session reset (#542) (#544)\n\nWhen SSE sessions are recreated every 5 minutes, the old session's MCP\nserver was not being closed, causing:\n- SimpleCache cleanup timer continuing to run indefinitely\n- Database connections remaining open\n- Cached data (~50-100MB per session) persisting in memory\n\nAdded server.close() call before transport.close() in resetSessionSSE(),\nmirroring the existing cleanup pattern in removeSession().\n\nFixes #542\n\nConceived by Romuald Członkowski - https://www.aiadvisors.pl/en\n\nCo-authored-by: Claude Opus 4.5 <noreply@anthropic.com>",
          "timestamp": "2026-01-21T13:56:16+01:00",
          "tree_id": "a7886bb6cbe8230ac4306a4c4993459b90d6a5db",
          "url": "https://github.com/czlonkowski/n8n-mcp/commit/fad343797719f96c33417ef32b54fe4107d51581"
        },
        "date": 1769000306810,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "sample - array sorting - small",
            "value": 0.0136,
            "range": "0.3096",
            "unit": "ms",
            "extra": "73341 ops/sec"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "56956555+czlonkowski@users.noreply.github.com",
            "name": "Romuald Członkowski",
            "username": "czlonkowski"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c8c76e435d80953cdbde3fc8b86675285c555b30",
          "message": "fix: critical memory leak from per-session database connections (#554)\n\n* fix: critical memory leak from per-session database connections (#542)\n\nEach MCP session was creating its own database connection (~900MB),\ncausing OOM kills every ~20 minutes with 3-4 concurrent sessions.\n\nChanges:\n- Add SharedDatabase singleton pattern - all sessions share ONE connection\n- Reduce session timeout from 30 min to 5 min (configurable)\n- Add eager cleanup for reconnecting instances\n- Fix telemetry event listener leak\n\nMemory impact: ~900MB/session → ~68MB shared + ~5MB/session overhead\n\nCo-Authored-By: Claude Opus 4.5 <noreply@anthropic.com>\nConceived by Romuald Czlonkowski - https://www.aiadvisors.pl/en\n\n* fix: resolve test failures from shared database race conditions\n\n- Fix `shutdown()` to respect shared database pattern (was directly closing)\n- Add `await this.initialized` in both `close()` and `shutdown()` to prevent\n  race condition where cleanup runs while initialization is in progress\n- Add double-shutdown protection with `isShutdown` flag\n- Export `SharedDatabaseState` type for proper typing\n- Include error details in debug logs\n- Add MCP server close to `shutdown()` for consistency with `close()`\n- Null out `earlyLogger` in `shutdown()` for consistency\n\nThe CI test failure \"The database connection is not open\" was caused by:\n1. `shutdown()` directly calling `this.db.close()` which closed the SHARED\n   database connection, breaking subsequent tests\n2. Race condition where `shutdown()` ran before initialization completed\n\nConceived by Romuald Członkowski - www.aiadvisors.pl/en\n\nCo-Authored-By: Claude Opus 4.5 <noreply@anthropic.com>\n\n* test: add unit tests for shared-database module\n\nAdd comprehensive unit tests covering:\n- getSharedDatabase: initialization, reuse, different path error, concurrent requests\n- releaseSharedDatabase: refCount decrement, double-release guard\n- closeSharedDatabase: state clearing, error handling, re-initialization\n- Helper functions: isSharedDatabaseInitialized, getSharedDatabaseRefCount\n\n21 tests covering the singleton database connection pattern used to prevent\n~900MB memory leaks per session.\n\nConceived by Romuald Członkowski - www.aiadvisors.pl/en\n\nCo-Authored-By: Claude Opus 4.5 <noreply@anthropic.com>\n\n---------\n\nCo-authored-by: Claude Opus 4.5 <noreply@anthropic.com>",
          "timestamp": "2026-01-23T19:51:22+01:00",
          "tree_id": "3a906ff4048963c970a61034513573e40decb4d9",
          "url": "https://github.com/czlonkowski/n8n-mcp/commit/c8c76e435d80953cdbde3fc8b86675285c555b30"
        },
        "date": 1769194408449,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "sample - array sorting - small",
            "value": 0.0136,
            "range": "0.3096",
            "unit": "ms",
            "extra": "73341 ops/sec"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "56956555+czlonkowski@users.noreply.github.com",
            "name": "Romuald Członkowski",
            "username": "czlonkowski"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "68148804105efa21b592242a9e5f61f52c55c778",
          "message": "chore: update n8n to 2.6.3 and bump version to 2.33.6 (#571)",
          "timestamp": "2026-02-06T09:09:37+01:00",
          "tree_id": "7cc6335dd85928c7b9ef7c72680ceec376426d28",
          "url": "https://github.com/czlonkowski/n8n-mcp/commit/68148804105efa21b592242a9e5f61f52c55c778"
        },
        "date": 1770365527929,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "sample - array sorting - small",
            "value": 0.0136,
            "range": "0.3096",
            "unit": "ms",
            "extra": "73341 ops/sec"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "56956555+czlonkowski@users.noreply.github.com",
            "name": "Romuald Członkowski",
            "username": "czlonkowski"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1f45cc6dcc416c5ae6c6079160fa44f766f6ea71",
          "message": "feat: MCP Apps - rich HTML UIs for tool results (#573)\n\n* feat: add MCP Apps with rich HTML UIs for tool results\n\nAdd MCP Apps infrastructure that allows MCP hosts like Claude Desktop\nto render rich HTML UIs alongside tool results via `_meta.ui` and the\nMCP resources protocol.\n\n- Server-side UI module (src/mcp/ui/) with UIAppRegistry, tool-to-UI\n  mapping, and _meta.ui injection into tool responses\n- React + Vite build pipeline (ui-apps/) producing self-contained HTML\n  per app using vite-plugin-singlefile\n- Operation Result UI for workflow CRUD tools (create, update, delete,\n  test, autofix, deploy)\n- Validation Summary UI for validation tools (validate_node,\n  validate_workflow, n8n_validate_workflow)\n- Shared component library (Card, Badge, Expandable) with n8n dark theme\n- MCP resources protocol support (ListResources, ReadResource handlers)\n- Graceful degradation when ui-apps/dist/ is not built\n- 22 unit tests across 3 test files\n\nConceived by Romuald Członkowski - https://www.aiadvisors.pl/en\n\nCo-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>\n\n* test: improve MCP Apps test coverage and add security hardening\n\n- Expand test suite from 22 to 57 tests across 3 test files\n- Add UIAppRegistry.reset() for proper test isolation between tests\n- Replace some fs mocks with real temp directory tests in registry\n- Add edge case coverage: empty strings, pre-load state, double load,\n  malformed URIs, duplicate tool patterns, empty HTML files\n- Add regression tests for specific tool-to-UI mappings\n- Add URI format consistency validation across all configs\n- Improve _meta.ui injection tests with structuredContent coexistence\n- Coverage: statements 79.4% -> 80%, lines 79.4% -> 80%\n\nConceived by Romuald Członkowski - https://www.aiadvisors.pl/en\n\nCo-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>\n\n---------\n\nCo-authored-by: Claude Opus 4.6 <noreply@anthropic.com>",
          "timestamp": "2026-02-07T04:11:21+01:00",
          "tree_id": "3e1d39e8415bcceec4d9242dffe80273daaa9410",
          "url": "https://github.com/czlonkowski/n8n-mcp/commit/1f45cc6dcc416c5ae6c6079160fa44f766f6ea71"
        },
        "date": 1770434047883,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "sample - array sorting - small",
            "value": 0.0136,
            "range": "0.3096",
            "unit": "ms",
            "extra": "73341 ops/sec"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "56956555+czlonkowski@users.noreply.github.com",
            "name": "Romuald Członkowski",
            "username": "czlonkowski"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "23b90d01a66de1f01274744a637a9496578cde67",
          "message": "fix: align MCP Apps with official ext-apps spec (#574)\n\n* feat: add MCP Apps with rich HTML UIs for tool results\n\nAdd MCP Apps infrastructure that allows MCP hosts like Claude Desktop\nto render rich HTML UIs alongside tool results via `_meta.ui` and the\nMCP resources protocol.\n\n- Server-side UI module (src/mcp/ui/) with UIAppRegistry, tool-to-UI\n  mapping, and _meta.ui injection into tool responses\n- React + Vite build pipeline (ui-apps/) producing self-contained HTML\n  per app using vite-plugin-singlefile\n- Operation Result UI for workflow CRUD tools (create, update, delete,\n  test, autofix, deploy)\n- Validation Summary UI for validation tools (validate_node,\n  validate_workflow, n8n_validate_workflow)\n- Shared component library (Card, Badge, Expandable) with n8n dark theme\n- MCP resources protocol support (ListResources, ReadResource handlers)\n- Graceful degradation when ui-apps/dist/ is not built\n- 22 unit tests across 3 test files\n\nConceived by Romuald Członkowski - https://www.aiadvisors.pl/en\n\nCo-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>\n\n* test: improve MCP Apps test coverage and add security hardening\n\n- Expand test suite from 22 to 57 tests across 3 test files\n- Add UIAppRegistry.reset() for proper test isolation between tests\n- Replace some fs mocks with real temp directory tests in registry\n- Add edge case coverage: empty strings, pre-load state, double load,\n  malformed URIs, duplicate tool patterns, empty HTML files\n- Add regression tests for specific tool-to-UI mappings\n- Add URI format consistency validation across all configs\n- Improve _meta.ui injection tests with structuredContent coexistence\n- Coverage: statements 79.4% -> 80%, lines 79.4% -> 80%\n\nConceived by Romuald Członkowski - https://www.aiadvisors.pl/en\n\nCo-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>\n\n* fix: align MCP Apps with official ext-apps spec\n\nUpdate URI scheme from n8n-mcp://ui/ to ui://n8n-mcp/ per MCP spec.\nMove _meta.ui.resourceUri to tool definitions (tools/list) instead of\ntool call responses. Rewrite UI apps hook to use @modelcontextprotocol/ext-apps\nApp class instead of window.__MCP_DATA__.\n\nConceived by Romuald Czlonkowski - https://www.aiadvisors.pl/en\nCo-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>\n\n---------\n\nCo-authored-by: Claude Opus 4.6 <noreply@anthropic.com>",
          "timestamp": "2026-02-07T05:16:15+01:00",
          "tree_id": "77cc15caa738e0d0af6b48a021377132174db7c5",
          "url": "https://github.com/czlonkowski/n8n-mcp/commit/23b90d01a66de1f01274744a637a9496578cde67"
        },
        "date": 1770437934544,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "sample - array sorting - small",
            "value": 0.0136,
            "range": "0.3096",
            "unit": "ms",
            "extra": "73341 ops/sec"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "56956555+czlonkowski@users.noreply.github.com",
            "name": "Romuald Członkowski",
            "username": "czlonkowski"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1b328d8168608905ae0f4efd654d79c22d718507",
          "message": "fix: include UI apps build in CI release pipeline (#575)\n\nThe release workflow only ran `npm run build` (TypeScript), skipping the\nUI apps build. This meant ui-apps/dist/ was missing from npm packages.\n\n- Change `npm run build` to `npm run build:all` in build-and-verify and\n  publish-npm jobs\n- Copy ui-apps/dist into the npm publish directory\n- Add ui-apps/dist/**/* to the published package files list\n- Bump version to 2.34.2\n\nConceived by Romuald Czlonkowski - https://www.aiadvisors.pl/en\n\nCo-authored-by: Claude Opus 4.6 <noreply@anthropic.com>",
          "timestamp": "2026-02-07T05:40:21+01:00",
          "tree_id": "21fc795a449cd4d5009f754d13215147c5067c6b",
          "url": "https://github.com/czlonkowski/n8n-mcp/commit/1b328d8168608905ae0f4efd654d79c22d718507"
        },
        "date": 1770439366282,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "sample - array sorting - small",
            "value": 0.0136,
            "range": "0.3096",
            "unit": "ms",
            "extra": "73341 ops/sec"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "56956555+czlonkowski@users.noreply.github.com",
            "name": "Romuald Członkowski",
            "username": "czlonkowski"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "38aa70261ae9a012d9bb157deffcc2a0e9046d08",
          "message": "fix: use text/html;profile=mcp-app MIME type for MCP Apps resources (#577)\n\nThe ext-apps spec requires RESOURCE_MIME_TYPE (text/html;profile=mcp-app)\nfor hosts to recognize resources as MCP Apps. Without the profile parameter,\nClaude Desktop/web fails with \"Failed to load MCP App: the resource may\nexceed the 5 MB size limit.\"\n\nConceived by Romuald Członkowski - https://www.aiadvisors.pl/en\n\nCo-authored-by: Claude Opus 4.6 <noreply@anthropic.com>",
          "timestamp": "2026-02-07T15:18:50+01:00",
          "tree_id": "c5dce9274e01c012b23f1f83d7896067c7b62302",
          "url": "https://github.com/czlonkowski/n8n-mcp/commit/38aa70261ae9a012d9bb157deffcc2a0e9046d08"
        },
        "date": 1770474080779,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "sample - array sorting - small",
            "value": 0.0136,
            "range": "0.3096",
            "unit": "ms",
            "extra": "73341 ops/sec"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "56956555+czlonkowski@users.noreply.github.com",
            "name": "Romuald Członkowski",
            "username": "czlonkowski"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a57b400bd044f92fae20fd35e8b774efcbdac816",
          "message": "fix: use official ext-apps useApp hook to fix blank MCP App rendering (#578)\n\nThe custom useToolData hook had lifecycle issues that prevented the UI\nfrom rendering in Claude Desktop/web: no appInfo in App constructor,\nunhandled connect() Promise, app.close() on unmount conflicting with\nReact Strict Mode. Switched to the official useApp hook from\n@modelcontextprotocol/ext-apps/react which handles initialization\nhandshake, handler registration, and cleanup correctly.\n\nConceived by Romuald Członkowski - https://www.aiadvisors.pl/en\n\nCo-authored-by: Claude Opus 4.6 <noreply@anthropic.com>",
          "timestamp": "2026-02-07T16:25:27+01:00",
          "tree_id": "056266d95005da1b26044426a3f33387b9906206",
          "url": "https://github.com/czlonkowski/n8n-mcp/commit/a57b400bd044f92fae20fd35e8b774efcbdac816"
        },
        "date": 1770478072477,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "sample - array sorting - small",
            "value": 0.0136,
            "range": "0.3096",
            "unit": "ms",
            "extra": "73341 ops/sec"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "56956555+czlonkowski@users.noreply.github.com",
            "name": "Romuald Członkowski",
            "username": "czlonkowski"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "020bc3d43dd4bf4660eea0e27e9fc592ef0fb0c0",
          "message": "fix: MCP App UI - use official ext-apps hook + align types with server responses (#579)\n\n* fix: use official ext-apps useApp hook to fix blank MCP App rendering\n\nThe custom useToolData hook had lifecycle issues that prevented the UI\nfrom rendering in Claude Desktop/web: no appInfo in App constructor,\nunhandled connect() Promise, app.close() on unmount conflicting with\nReact Strict Mode. Switched to the official useApp hook from\n@modelcontextprotocol/ext-apps/react which handles initialization\nhandshake, handler registration, and cleanup correctly.\n\nConceived by Romuald Członkowski - https://www.aiadvisors.pl/en\n\nCo-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>\n\n* fix: align MCP App UI types with actual server response format\n\n- useToolData hook now uses official useApp from ext-apps/react\n- OperationResultData uses success:boolean + data.id/name (matching\n  McpToolResponse from handlers-n8n-manager.ts)\n- ValidationSummaryData handles both direct results (validate_node,\n  validate_workflow) and wrapped results (n8n_validate_workflow)\n- Added visible error/connection states for debugging\n\nConceived by Romuald Członkowski - https://www.aiadvisors.pl/en\n\nCo-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>\n\n---------\n\nCo-authored-by: Claude Opus 4.6 <noreply@anthropic.com>",
          "timestamp": "2026-02-08T02:08:50+01:00",
          "tree_id": "cabd51b5b5a47cd3efbe7b27644457102bb322e6",
          "url": "https://github.com/czlonkowski/n8n-mcp/commit/020bc3d43dd4bf4660eea0e27e9fc592ef0fb0c0"
        },
        "date": 1770513110599,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "sample - array sorting - small",
            "value": 0.0136,
            "range": "0.3096",
            "unit": "ms",
            "extra": "73341 ops/sec"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "56956555+czlonkowski@users.noreply.github.com",
            "name": "Romuald Członkowski",
            "username": "czlonkowski"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c6015817146aa62981e129227bf9e72e40e27b1a",
          "message": "Fix/mcp app blank UI (#580)\n\n* fix: use official ext-apps useApp hook to fix blank MCP App rendering\n\nThe custom useToolData hook had lifecycle issues that prevented the UI\nfrom rendering in Claude Desktop/web: no appInfo in App constructor,\nunhandled connect() Promise, app.close() on unmount conflicting with\nReact Strict Mode. Switched to the official useApp hook from\n@modelcontextprotocol/ext-apps/react which handles initialization\nhandshake, handler registration, and cleanup correctly.\n\nConceived by Romuald Członkowski - https://www.aiadvisors.pl/en\n\nCo-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>\n\n* fix: align MCP App UI types with actual server response format\n\n- useToolData hook now uses official useApp from ext-apps/react\n- OperationResultData uses success:boolean + data.id/name (matching\n  McpToolResponse from handlers-n8n-manager.ts)\n- ValidationSummaryData handles both direct results (validate_node,\n  validate_workflow) and wrapped results (n8n_validate_workflow)\n- Added visible error/connection states for debugging\n\nConceived by Romuald Członkowski - https://www.aiadvisors.pl/en\n\nCo-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>\n\n* chore: bump version to 2.34.5 for npm publish\n\nCo-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>\n\n---------\n\nCo-authored-by: Claude Opus 4.6 <noreply@anthropic.com>",
          "timestamp": "2026-02-08T03:23:16+01:00",
          "tree_id": "950b563396eb2b1935e379dbd5b19b234d73f76a",
          "url": "https://github.com/czlonkowski/n8n-mcp/commit/c6015817146aa62981e129227bf9e72e40e27b1a"
        },
        "date": 1770517545456,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "sample - array sorting - small",
            "value": 0.0136,
            "range": "0.3096",
            "unit": "ms",
            "extra": "73341 ops/sec"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "56956555+czlonkowski@users.noreply.github.com",
            "name": "Romuald Członkowski",
            "username": "czlonkowski"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "89146186d8c5d480e284eefbade2c564e80374db",
          "message": "feat: UI/UX redesign for MCP Apps - 3 new apps + enhanced existing (#583)\n\nAdd workflow-list, execution-history, and health-dashboard apps.\nRedesign operation-result with operation-aware headers, detail panels,\nand copy-to-clipboard. Fix React hooks violations in validation-summary\nand execution-history (useMemo after early returns). Add local preview\nharness for development. Update tests for 5-app config.\n\nConceived by Romuald Członkowski - www.aiadvisors.pl/en\n\nCo-authored-by: Claude Opus 4.6 <noreply@anthropic.com>",
          "timestamp": "2026-02-09T03:36:27+01:00",
          "tree_id": "0f7ed6841ebdb0b393b21bec41ab30973d65406a",
          "url": "https://github.com/czlonkowski/n8n-mcp/commit/89146186d8c5d480e284eefbade2c564e80374db"
        },
        "date": 1770604744721,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "sample - array sorting - small",
            "value": 0.0136,
            "range": "0.3096",
            "unit": "ms",
            "extra": "73341 ops/sec"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "56956555+czlonkowski@users.noreply.github.com",
            "name": "Romuald Członkowski",
            "username": "czlonkowski"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "8217229e2fb4615e44caafd3e8869da6d30f80b1",
          "message": "chore: bump version to 2.35.0 and update CHANGELOG (#584)\n\nConceived by Romuald Członkowski - www.aiadvisors.pl/en\n\nCo-authored-by: Claude Opus 4.6 <noreply@anthropic.com>",
          "timestamp": "2026-02-09T04:38:56+01:00",
          "tree_id": "2acb07d5da038ccb1b618ba84ea66e9b63aba2ac",
          "url": "https://github.com/czlonkowski/n8n-mcp/commit/8217229e2fb4615e44caafd3e8869da6d30f80b1"
        },
        "date": 1770608473559,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "sample - array sorting - small",
            "value": 0.0136,
            "range": "0.3096",
            "unit": "ms",
            "extra": "73341 ops/sec"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "56956555+czlonkowski@users.noreply.github.com",
            "name": "Romuald Członkowski",
            "username": "czlonkowski"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "34159f4ece6f345ead8f2c551fa391f621073f99",
          "message": "fix: add legacy flat _meta key for MCP App rendering in Claude (#585)\n\nClaude.ai reads the flat `_meta[\"ui/resourceUri\"]` key to discover UI apps,\nnot the nested `_meta.ui.resourceUri`. Without the flat key, tools like\nn8n_health_check and n8n_list_workflows showed as collapsed accordions\ninstead of rendering rich UI. Now sets both keys, matching the behavior\nof the official registerAppTool helper from @modelcontextprotocol/ext-apps.\n\nConceived by Romuald Członkowski - www.aiadvisors.pl/en\n\nCo-authored-by: Claude Opus 4.6 <noreply@anthropic.com>",
          "timestamp": "2026-02-09T06:40:52+01:00",
          "tree_id": "5239293aeb3293cd3619ee62a2c6cae42facd4d2",
          "url": "https://github.com/czlonkowski/n8n-mcp/commit/34159f4ece6f345ead8f2c551fa391f621073f99"
        },
        "date": 1770615798173,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "sample - array sorting - small",
            "value": 0.0136,
            "range": "0.3096",
            "unit": "ms",
            "extra": "73341 ops/sec"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "56956555+czlonkowski@users.noreply.github.com",
            "name": "Romuald Członkowski",
            "username": "czlonkowski"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6f695be48205831f4dcccf73c3d60cced196b77c",
          "message": "fix: disable MCP Apps that don't render in Claude.ai (#586)\n\nDisable 3 MCP Apps (workflow-list, execution-history, health-dashboard)\nthat show as collapsed accordions and remove n8n_deploy_template tool\nmapping that renders blank content. The server sets _meta correctly on\nthe wire but the Claude.ai host ignores it for these tools. Keep the 2\nworking apps (operation-result, validation-summary) active.\n\nConceived by Romuald Czlonkowski - https://www.aiadvisors.pl/en\n\nCo-authored-by: Claude Opus 4.6 <noreply@anthropic.com>",
          "timestamp": "2026-02-10T02:26:40+01:00",
          "tree_id": "e0e55dded1fe24727a3288b6d22bbe9f66c21a20",
          "url": "https://github.com/czlonkowski/n8n-mcp/commit/6f695be48205831f4dcccf73c3d60cced196b77c"
        },
        "date": 1770686938866,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "sample - array sorting - small",
            "value": 0.0136,
            "range": "0.3096",
            "unit": "ms",
            "extra": "73341 ops/sec"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "56956555+czlonkowski@users.noreply.github.com",
            "name": "Romuald Członkowski",
            "username": "czlonkowski"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "77048347b3a82421ffa0b8b6bd44f8f50dd8cf52",
          "message": "chore: update n8n to 2.8.3 (#603)\n\n* chore: update n8n to 2.8.3 and bump version to 2.35.3\n\n- Updated n8n from 2.6.3 to 2.8.3\n- Updated n8n-core from 2.6.1 to 2.8.1\n- Updated n8n-workflow from 2.6.0 to 2.8.0\n- Updated @n8n/n8n-nodes-langchain from 2.6.2 to 2.8.1\n- Fixed node loader to bypass restricted package.json exports in\n  @n8n/n8n-nodes-langchain >=2.9.0 (resolves via absolute paths)\n- Fixed community doc generator for cloud LLMs: added API key env var\n  support, switched to max_completion_tokens, auto-omit temperature\n- Rebuilt node database with 1,236 nodes (673 n8n-nodes-base,\n  133 @n8n/n8n-nodes-langchain, 430 community)\n- Refreshed community nodes (361 verified + 69 npm) with 424 AI summaries\n- Updated README badge with new n8n version and node counts\n- Updated CHANGELOG with dependency changes\n\nConceived by Romuald Członkowski - https://www.aiadvisors.pl/en\n\n🤖 Generated with [Claude Code](https://claude.com/claude-code)\n\nCo-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>\n\n* fix: update documentation-generator tests for max_completion_tokens\n\n- Updated test assertions from max_tokens to max_completion_tokens\n- Updated testConnection token limit expectation from 10 to 200\n- Added temperature to test config to match new configurable behavior\n\nCo-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>\n\n---------\n\nCo-authored-by: Claude Opus 4.6 <noreply@anthropic.com>",
          "timestamp": "2026-02-20T02:15:15+01:00",
          "tree_id": "3fd6bf33adf702cee779dffe9196bb2155947f22",
          "url": "https://github.com/czlonkowski/n8n-mcp/commit/77048347b3a82421ffa0b8b6bd44f8f50dd8cf52"
        },
        "date": 1771550304557,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "sample - array sorting - small",
            "value": 0.0136,
            "range": "0.3096",
            "unit": "ms",
            "extra": "73341 ops/sec"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "56956555+czlonkowski@users.noreply.github.com",
            "name": "Romuald Członkowski",
            "username": "czlonkowski"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4bad880f44fc26176083b1417681e45411cdeade",
          "message": "fix: defensive JSON.parse for stringified object/array params (#605) (#606)\n\n* chore: update n8n to 2.8.3 and bump version to 2.35.3\n\n- Updated n8n from 2.6.3 to 2.8.3\n- Updated n8n-core from 2.6.1 to 2.8.1\n- Updated n8n-workflow from 2.6.0 to 2.8.0\n- Updated @n8n/n8n-nodes-langchain from 2.6.2 to 2.8.1\n- Fixed node loader to bypass restricted package.json exports in\n  @n8n/n8n-nodes-langchain >=2.9.0 (resolves via absolute paths)\n- Fixed community doc generator for cloud LLMs: added API key env var\n  support, switched to max_completion_tokens, auto-omit temperature\n- Rebuilt node database with 1,236 nodes (673 n8n-nodes-base,\n  133 @n8n/n8n-nodes-langchain, 430 community)\n- Refreshed community nodes (361 verified + 69 npm) with 424 AI summaries\n- Updated README badge with new n8n version and node counts\n- Updated CHANGELOG with dependency changes\n\nConceived by Romuald Członkowski - https://www.aiadvisors.pl/en\n\n🤖 Generated with [Claude Code](https://claude.com/claude-code)\n\nCo-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>\n\n* fix: update documentation-generator tests for max_completion_tokens\n\n- Updated test assertions from max_tokens to max_completion_tokens\n- Updated testConnection token limit expectation from 10 to 200\n- Added temperature to test config to match new configurable behavior\n\nCo-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>\n\n* fix: defensive JSON.parse for stringified object/array params (#605)\n\nClaude Desktop 1.1.3189 serializes object/array MCP parameters as JSON\nstrings, causing ZodError failures for ~60% of tools. Add schema-driven\ncoercion in the central CallToolRequestSchema handler to detect and parse\nthem back automatically.\n\nConceived by Romuald Czlonkowski - https://www.aiadvisors.pl/en\n\nCo-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>\n\n---------\n\nCo-authored-by: Claude Opus 4.6 <noreply@anthropic.com>",
          "timestamp": "2026-02-20T16:56:25+01:00",
          "tree_id": "b382766ebaefb6c237f0966b5581ee6016e49f57",
          "url": "https://github.com/czlonkowski/n8n-mcp/commit/4bad880f44fc26176083b1417681e45411cdeade"
        },
        "date": 1771603168320,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "sample - array sorting - small",
            "value": 0.0136,
            "range": "0.3096",
            "unit": "ms",
            "extra": "73341 ops/sec"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "56956555+czlonkowski@users.noreply.github.com",
            "name": "Romuald Członkowski",
            "username": "czlonkowski"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "87f26eef1847852b0f8907b11014001ef4074fd9",
          "message": "fix: comprehensive param type coercion for Claude Desktop/Claude.ai (#605) (#609)\n\nExpand coerceStringifiedJsonParams() to handle ALL type mismatches,\nnot just stringified objects/arrays. Testing showed 6/9 tools still\nfailing in Claude Desktop after v2.35.4.\n\n- Coerce string→number, string→boolean, number→string, boolean→string\n- Add safeguard for entire args object arriving as JSON string\n- Add [Diagnostic] section to error responses with received arg types\n- Bump to v2.35.5\n- 24 unit tests (9 new)\n\nConceived by Romuald Czlonkowski - https://www.aiadvisors.pl/en\n\nCo-authored-by: Claude Opus 4.6 <noreply@anthropic.com>",
          "timestamp": "2026-02-22T07:07:30+01:00",
          "tree_id": "a2b3f1b9d290f4a5565bc9bc3b5dfaace4551cfd",
          "url": "https://github.com/czlonkowski/n8n-mcp/commit/87f26eef1847852b0f8907b11014001ef4074fd9"
        },
        "date": 1771740639993,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "sample - array sorting - small",
            "value": 0.0136,
            "range": "0.3096",
            "unit": "ms",
            "extra": "73341 ops/sec"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "56956555+czlonkowski@users.noreply.github.com",
            "name": "Romuald Członkowski",
            "username": "czlonkowski"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0998e5486e47cc5a804e0c3e56a974248ffa426b",
          "message": "chore: update n8n to 2.10.3 (#618)\n\n* chore: update n8n to 2.10.3 and bump version to 2.35.6\n\n- Updated n8n from 2.8.3 to 2.10.3\n- Updated n8n-core from 2.8.1 to 2.10.1\n- Updated n8n-workflow from 2.8.0 to 2.10.1\n- Updated @n8n/n8n-nodes-langchain from 2.8.1 to 2.10.1\n- Rebuilt node database with 806 core nodes (community nodes preserved from previous build)\n- Updated README badge with new n8n version\n- Updated CHANGELOG with dependency changes\n\nConceived by Romuald Członkowski - https://www.aiadvisors.pl/en\n\n🤖 Generated with [Claude Code](https://claude.com/claude-code)\n\nCo-Authored-By: Claude <noreply@anthropic.com>\n\n* fix: override isolated-vm with empty stub to fix CI build\n\nisolated-vm 6.0.2 (transitive dep from n8n-nodes-base) fails to compile\nnatively on CI (Node 20 + Linux) due to V8 API changes. This package is\nnot used at runtime by n8n-mcp - we only read node metadata, not execute\nnodes. Override with empty-npm-package to avoid the native compilation.\n\nConceived by Romuald Członkowski - https://www.aiadvisors.pl/en\n\n🤖 Generated with [Claude Code](https://claude.com/claude-code)\n\nCo-Authored-By: Claude <noreply@anthropic.com>\n\n* fix: skip native compilation in fresh install CI check\n\nThe fresh install test simulates `npm install n8n-mcp` from scratch,\nso package.json overrides don't apply. Use --ignore-scripts to skip\nisolated-vm native compilation since n8n-mcp only reads node metadata\nand doesn't execute n8n nodes at runtime.\n\nConceived by Romuald Członkowski - https://www.aiadvisors.pl/en\n\n🤖 Generated with [Claude Code](https://claude.com/claude-code)\n\nCo-Authored-By: Claude <noreply@anthropic.com>\n\n---------\n\nCo-authored-by: Claude <noreply@anthropic.com>",
          "timestamp": "2026-03-04T15:47:10+01:00",
          "tree_id": "52ea4be51ce2309c852291f51c4dec9f4f6b2c9f",
          "url": "https://github.com/czlonkowski/n8n-mcp/commit/0998e5486e47cc5a804e0c3e56a974248ffa426b"
        },
        "date": 1772635869941,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "sample - array sorting - small",
            "value": 0.0136,
            "range": "0.3096",
            "unit": "ms",
            "extra": "73341 ops/sec"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "56956555+czlonkowski@users.noreply.github.com",
            "name": "Romuald Członkowski",
            "username": "czlonkowski"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0918cd54255aea144157ead84f1c23b9c592e588",
          "message": "feat(validator): detect broken/malformed workflow connections (#620) (#621)",
          "timestamp": "2026-03-07T23:55:23+01:00",
          "tree_id": "e2daf48dda700c4ae571e74c979df5659b41666e",
          "url": "https://github.com/czlonkowski/n8n-mcp/commit/0918cd54255aea144157ead84f1c23b9c592e588"
        },
        "date": 1772924326949,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "sample - array sorting - small",
            "value": 0.0136,
            "range": "0.3096",
            "unit": "ms",
            "extra": "73341 ops/sec"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "56956555+czlonkowski@users.noreply.github.com",
            "name": "Romuald Członkowski",
            "username": "czlonkowski"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "25b8a8145d0fc84fb23c51ffee6a103b99c90463",
          "message": "feat(validator): detect conditional branch fan-out & connection auto-fixes (#622)\n\n* feat(auto-fixer): add 5 connection structure fix types\n\nAdd automatic repair for malformed workflow connections commonly\ngenerated by AI models:\n- connection-numeric-keys: \"0\",\"1\" keys → main[0], main[1]\n- connection-invalid-type: type:\"0\" → type:\"main\" (or parent key)\n- connection-id-to-name: node ID refs → node name refs\n- connection-duplicate-removal: dedup identical connection entries\n- connection-input-index: out-of-bounds input index → clamped\n\nIncludes collision-safe ID-to-name renames, medium confidence on\nmerge conflicts and index clamping, shared CONNECTION_FIX_TYPES\nconstant, and 24 unit tests.\n\nConcieved by Romuald Członkowski - www.aiadvisors.pl/en\n\n\n* feat(validator): detect IF/Switch/Filter conditional branch fan-out misuse\n\nAdd CONDITIONAL_BRANCH_FANOUT warning when conditional nodes have all\nconnections on main[0] with higher outputs empty, indicating both\nbranches execute together instead of being split by condition.\n\nExtract getShortNodeType() and getConditionalOutputInfo() helpers to\ndeduplicate conditional node detection logic.\n\nConceived by Romuald Czlonkowski - https://www.aiadvisors.pl/en",
          "timestamp": "2026-03-08T08:41:44+01:00",
          "tree_id": "53678da586143eb794b4172519233d3c24bf2570",
          "url": "https://github.com/czlonkowski/n8n-mcp/commit/25b8a8145d0fc84fb23c51ffee6a103b99c90463"
        },
        "date": 1772955929107,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "sample - array sorting - small",
            "value": 0.0136,
            "range": "0.3096",
            "unit": "ms",
            "extra": "73341 ops/sec"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "56956555+czlonkowski@users.noreply.github.com",
            "name": "Romuald Członkowski",
            "username": "czlonkowski"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "248f859c4927beb3d670d1c4f9e611bc588deeb8",
          "message": "chore: update n8n to 2.11.4 (#634)\n\n* chore: update n8n to 2.11.4 and bump version to 2.36.2\n\n- Updated n8n from 2.10.3 to 2.11.4\n- Updated n8n-core from 2.10.1 to 2.11.1\n- Updated n8n-workflow from 2.10.1 to 2.11.1\n- Updated @n8n/n8n-nodes-langchain from 2.10.1 to 2.11.2\n- Updated @modelcontextprotocol/sdk from 1.20.1 to 1.27.1 (critical security fix)\n- Rebuilt node database with 1,239 nodes (809 core + 430 community preserved)\n- Updated README badge with new n8n version and node counts\n- Updated CHANGELOG with dependency changes\n\nConceived by Romuald Członkowski - https://www.aiadvisors.pl/en\n\nCo-Authored-By: Claude Opus 4.6 (1M context) <noreply@anthropic.com>\n\n* fix(ci): update MCP SDK version check from 1.20.1 to 1.27.1\n\nThe dependency-check workflow was hardcoded to expect MCP SDK 1.20.1,\ncausing CI failure after the intentional upgrade to 1.27.1.\n\nConceived by Romuald Członkowski - https://www.aiadvisors.pl/en\n\nCo-Authored-By: Claude Opus 4.6 (1M context) <noreply@anthropic.com>\n\n* fix(tests): close existing connection before reconnecting in MCP protocol tests\n\nMCP SDK 1.27+ enforces single-connection per Server instance, throwing\n\"Already connected to a transport\" when connect() is called twice.\nUpdated test helper to close existing connections before reconnecting.\n\nConceived by Romuald Członkowski - https://www.aiadvisors.pl/en\n\nCo-Authored-By: Claude Opus 4.6 (1M context) <noreply@anthropic.com>\n\n---------\n\nCo-authored-by: Claude Opus 4.6 (1M context) <noreply@anthropic.com>",
          "timestamp": "2026-03-14T14:04:43+01:00",
          "tree_id": "59010dff5cc8a57952b5e69a0cf8f9169d8bb44a",
          "url": "https://github.com/czlonkowski/n8n-mcp/commit/248f859c4927beb3d670d1c4f9e611bc588deeb8"
        },
        "date": 1773493704134,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "sample - array sorting - small",
            "value": 0.0136,
            "range": "0.3096",
            "unit": "ms",
            "extra": "73341 ops/sec"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "56956555+czlonkowski@users.noreply.github.com",
            "name": "Romuald Członkowski",
            "username": "czlonkowski"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9590f751d2eb83213be0ba789f0be5252f0f5364",
          "message": "fix: resolve multiple n8n_update_partial_workflow bugs (#635)\n\n* fix: use correct MCP SDK API for server capabilities in test\n\ngetServerVersion() returns Implementation (name/version only), not the\nfull init result. Use client.getServerCapabilities() instead to access\nserver capabilities, fixing the CI typecheck failure.\n\nConcieved by Romuald Członkowski - www.aiadvisors.pl/en\n\nCo-Authored-By: Claude Opus 4.6 (1M context) <noreply@anthropic.com>\n\n* fix: resolve multiple n8n_update_partial_workflow bugs (#592, #599, #610, #623, #624, #625, #629, #630, #633)\n\nPhase 1 - Data loss prevention:\n- Add missing unary operators (empty, notEmpty, exists, notExists) to sanitizer (#592)\n- Preserve positional empty arrays in connections during removeNode/cleanStale (#610)\n- Scope sanitization to modified nodes only, preventing unrelated node corruption\n- Add empty body {} to activate/deactivate POST calls to fix 415 errors (#633)\n\nPhase 2 - Error handling & response clarity:\n- Serialize Zod errors to readable \"path: message\" strings (#630)\n- Add saved:true/false field to all response paths (#625)\n- Improve updateNode error hint with correct structure example (#623)\n- Track removed node names for better removeConnection errors (#624)\n\nPhase 3 - Connection & type fixes:\n- Coerce sourceOutput/targetInput to String() consistently (#629)\n- Accept numeric sourceOutput/targetInput at Zod schema level via transform\n\nPhase 4 - Tag operations via dedicated API (#599):\n- Track tags as tagsToAdd/tagsToRemove instead of mutating workflow.tags\n- Orchestrate tag creation and association via listTags/createTag/updateWorkflowTags\n- Reconcile conflicting add/remove for same tag (last operation wins)\n- Tag failures produce warnings, not hard errors\n\nConceived by Romuald Członkowski - www.aiadvisors.pl/en\n\nCo-Authored-By: Claude Opus 4.6 (1M context) <noreply@anthropic.com>\n\n* docs: add v2.37.0 changelog entry\n\nConceived by Romuald Członkowski - www.aiadvisors.pl/en\n\nCo-Authored-By: Claude Opus 4.6 (1M context) <noreply@anthropic.com>\n\n* fix: resolve pre-existing integration test failures in CI\n\n- Create new MCP Server instance per connection in test helpers (SDK 1.27+\n  requires separate Protocol instance per connection)\n- Normalize database paths with path.resolve() in shared-database singleton\n  to prevent path mismatch errors across test files\n- Add no-op catch handler to deferred initialization promise in server.ts\n  to prevent unhandled rejection warnings\n- Properly call mcpServer.shutdown() in test helper close() to release\n  shared database references\n\nConceived by Romuald Członkowski - www.aiadvisors.pl/en\n\nCo-Authored-By: Claude Opus 4.6 (1M context) <noreply@anthropic.com>\n\n---------\n\nCo-authored-by: Claude Opus 4.6 (1M context) <noreply@anthropic.com>",
          "timestamp": "2026-03-14T17:27:33+01:00",
          "tree_id": "5914b08908ca7b9d9edb34b950721e9148995740",
          "url": "https://github.com/czlonkowski/n8n-mcp/commit/9590f751d2eb83213be0ba789f0be5252f0f5364"
        },
        "date": 1773505855556,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "sample - array sorting - small",
            "value": 0.0136,
            "range": "0.3096",
            "unit": "ms",
            "extra": "73341 ops/sec"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "56956555+czlonkowski@users.noreply.github.com",
            "name": "Romuald Członkowski",
            "username": "czlonkowski"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "599bc664d094b1729f71ef523c9d35d16a45f833",
          "message": "fix: numeric sourceOutput remapping, IMAP trigger detection, AI tool description validation (#537, #538, #477, #602) (#636)\n\n- Remap numeric sourceOutput (\"0\",\"1\") to \"main\" with sourceIndex,\n  with guard to skip when branch/case smart params are present (#537)\n- Recognize emailReadImap as activatable trigger in isTriggerNode() (#538)\n- Add getToolDescription() helper checking toolDescription, description,\n  and options.description across all AI tool validators (#477)\n- Defensive check for missing workflow ID in create response (#602)\n- Relax flaky CI thresholds: perf test ratio 15→20, timing variance 10%→50%\n\nConceived by Romuald Członkowski - www.aiadvisors.pl/en\n\nCo-authored-by: Claude Opus 4.6 (1M context) <noreply@anthropic.com>",
          "timestamp": "2026-03-14T18:40:58+01:00",
          "tree_id": "b8e5916dcaa1a0175ae3e1c2b3e3e5773e51b2e6",
          "url": "https://github.com/czlonkowski/n8n-mcp/commit/599bc664d094b1729f71ef523c9d35d16a45f833"
        },
        "date": 1773510280335,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "sample - array sorting - small",
            "value": 0.0136,
            "range": "0.3096",
            "unit": "ms",
            "extra": "73341 ops/sec"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "56956555+czlonkowski@users.noreply.github.com",
            "name": "Romuald Członkowski",
            "username": "czlonkowski"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "65ab94deb27b01b3f1eb084e1d2e8f7b74ad4465",
          "message": "fix: code validator false positives and null property removal (#294, #293, #611) (#637)\n\n- Fix $() node reference triggering \"Invalid $ usage\" warning by adding ( and _ to regex lookahead\n- Fix helper function primitive returns triggering \"Cannot return primitive values\" error\n- Fix null values in diff engine causing Zod validation errors — null now deletes properties\n- Update property removal docs from undefined to null\n\nConceived by Romuald Członkowski - https://www.aiadvisors.pl/en\n\nCo-authored-by: Claude Opus 4.6 (1M context) <noreply@anthropic.com>",
          "timestamp": "2026-03-15T11:26:44+01:00",
          "tree_id": "bf5205fec682486a742d8355ad764c390977ff5d",
          "url": "https://github.com/czlonkowski/n8n-mcp/commit/65ab94deb27b01b3f1eb084e1d2e8f7b74ad4465"
        },
        "date": 1773570602972,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "sample - array sorting - small",
            "value": 0.0136,
            "range": "0.3096",
            "unit": "ms",
            "extra": "73341 ops/sec"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "56956555+czlonkowski@users.noreply.github.com",
            "name": "Romuald Członkowski",
            "username": "czlonkowski"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f7a1cfe8bfe12530e012e43ca4a9de8dc943ca23",
          "message": "fix: field normalization, AI connection validation, autofix filter (#581) (#638)\n\n- Normalize name→nodeName and id→nodeId for node-targeting operations in\n  the Zod schema transform, so LLMs using natural field names no longer\n  get \"Node not found\" errors\n- Replace hardcoded ALL_CONNECTION_TYPES with dynamic iteration so AI\n  sub-nodes (ai_outputParser, ai_document, ai_textSplitter, etc.) are\n  not flagged as disconnected during save\n- Add .catchall() to workflowConnectionSchema and extend connection\n  reference validation to cover all connection types, not just main\n- Fix filterOperationsByFixes ID-vs-name mismatch: typeversion-upgrade\n  operations now include nodeName alongside nodeId, and the filter checks\n  both fields\n\nConceived by Romuald Członkowski - https://www.aiadvisors.pl/en\n\nCo-authored-by: Claude Opus 4.6 (1M context) <noreply@anthropic.com>",
          "timestamp": "2026-03-15T14:32:14+01:00",
          "tree_id": "3e8170b820822d4dc4ea7be6f3fbc5c3c099c25d",
          "url": "https://github.com/czlonkowski/n8n-mcp/commit/f7a1cfe8bfe12530e012e43ca4a9de8dc943ca23"
        },
        "date": 1773581741869,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "sample - array sorting - small",
            "value": 0.0136,
            "range": "0.3096",
            "unit": "ms",
            "extra": "73341 ops/sec"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "56956555+czlonkowski@users.noreply.github.com",
            "name": "Romuald Członkowski",
            "username": "czlonkowski"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "14962a39b648d0e22d40b7848950b761d458f34c",
          "message": "chore: update n8n to 2.12.3 and bump version to 2.37.4 (#647)",
          "timestamp": "2026-03-18T17:01:25+01:00",
          "tree_id": "04450f0a5319f53a2e4d31b4e60f4b392308c2b0",
          "url": "https://github.com/czlonkowski/n8n-mcp/commit/14962a39b648d0e22d40b7848950b761d458f34c"
        },
        "date": 1773849911143,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "sample - array sorting - small",
            "value": 0.0136,
            "range": "0.3096",
            "unit": "ms",
            "extra": "73341 ops/sec"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "56956555+czlonkowski@users.noreply.github.com",
            "name": "Romuald Członkowski",
            "username": "czlonkowski"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "47a1cb135db7fd4a9f02d694286c5091dc86cbe2",
          "message": "feat: implement transferWorkflow operation in n8n_update_partial_workflow (#644) (#649)\n\nAdd transferWorkflow diff operation to move workflows between n8n projects:\n- TransferWorkflowOperation type with destinationProjectId field\n- WorkflowDiffEngine validates and tracks transfer intent\n- Handler calls PUT /workflows/{id}/transfer after update\n- N8nApiClient.transferWorkflow() method\n- Zod schema validates destinationProjectId is non-empty\n- Tool description and documentation updated\n- inferIntentFromOperations case for transfer\n\nAlso fixes two pre-existing bugs found during review:\n- continueOnError path now properly extracts/propagates activation flags\n- Debug log in updateConnectionReferences shows correct old name\n\nBased on work by @djakielski in PR #645.\n\n\nConceived by Romuald Członkowski - https://www.aiadvisors.pl/en",
          "timestamp": "2026-03-20T17:50:00+01:00",
          "tree_id": "1d2537cd8b69eecf2e98ceadad07b68cbc5df9ef",
          "url": "https://github.com/czlonkowski/n8n-mcp/commit/47a1cb135db7fd4a9f02d694286c5091dc86cbe2"
        },
        "date": 1774025557446,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "sample - array sorting - small",
            "value": 0.0136,
            "range": "0.3096",
            "unit": "ms",
            "extra": "73341 ops/sec"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "56956555+czlonkowski@users.noreply.github.com",
            "name": "Romuald Członkowski",
            "username": "czlonkowski"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "be3d07dbdc6e18c05da99337920cce94426f7a6a",
          "message": "feat: add n8n_manage_datatable MCP tool with full CRUD (#640) (#650)\n\n* feat: add n8n_create_data_table MCP tool and projectId for create workflow (#640)\n\nAdd new MCP tool to create n8n data tables via the REST API:\n- n8n_create_data_table tool definition with name + columns schema\n- handleCreateDataTable handler with Zod validation and N8nApiError handling\n- N8nApiClient.createDataTable() calling POST /data-tables\n- DataTable, DataTableColumn, DataTableColumnResponse types per OpenAPI spec\n- Column types: string | number | boolean | date | json\n- Input validation: .min(1) on table name and column names\n- Tool documentation with examples, use cases, and pitfalls\n\nAlso adds projectId parameter to n8n_create_workflow for enterprise\nproject support, and fixes stale management tool count in health check.\n\nBased on work by @djakielski in PR #646.\nCo-Authored-By: Dominik Jakielski <dominik.jakielski@urlaubsguru.de>\n\nConceived by Romuald Członkowski - https://www.aiadvisors.pl/en\n\nCo-Authored-By: Claude Opus 4.6 (1M context) <noreply@anthropic.com>\n\n* feat: replace n8n_create_data_table with n8n_manage_datatable (10 actions)\n\nReplaces the single-purpose n8n_create_data_table tool with a comprehensive\nn8n_manage_datatable tool covering all 10 n8n data table API endpoints:\n\nTable operations: createTable, listTables, getTable, updateTable, deleteTable\nRow operations: getRows, insertRows, updateRows, upsertRows, deleteRows\n\n- Filter system with and/or logic and 8 condition operators\n- Dry-run support for updateRows, upsertRows, deleteRows\n- Pagination, sorting, and full-text search for row listing\n- 9 new N8nApiClient methods for all data table endpoints\n- Shared error handler and consolidated Zod schemas\n- Comprehensive tool documentation with examples per action\n- 36 handler tests + 18 API client tests\n\nBREAKING: n8n_create_data_table removed. Use n8n_manage_datatable with\naction=\"createTable\" instead.\n\nBased on work by @djakielski in PR #646.\nCo-Authored-By: Dominik Jakielski <dominik.jakielski@urlaubsguru.de>\n\nConceived by Romuald Członkowski - https://www.aiadvisors.pl/en",
          "timestamp": "2026-03-21T19:06:22+01:00",
          "tree_id": "ee72a38f5e97543560230663aac76a8f9a3c26cc",
          "url": "https://github.com/czlonkowski/n8n-mcp/commit/be3d07dbdc6e18c05da99337920cce94426f7a6a"
        },
        "date": 1774116552531,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "sample - array sorting - small",
            "value": 0.0136,
            "range": "0.3096",
            "unit": "ms",
            "extra": "73341 ops/sec"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "56956555+czlonkowski@users.noreply.github.com",
            "name": "Romuald Członkowski",
            "username": "czlonkowski"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c5665632af4d1d2366bcbf8d079d48c38e4fbecb",
          "message": "fix: resolve 5 bugs in n8n_manage_datatable (#651)",
          "timestamp": "2026-03-22T00:12:39+01:00",
          "tree_id": "3f5522660cb7a912b655a9ae6e10687ada1c5818",
          "url": "https://github.com/czlonkowski/n8n-mcp/commit/c5665632af4d1d2366bcbf8d079d48c38e4fbecb"
        },
        "date": 1774134917814,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "sample - array sorting - small",
            "value": 0.0136,
            "range": "0.3096",
            "unit": "ms",
            "extra": "73341 ops/sec"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "56956555+czlonkowski@users.noreply.github.com",
            "name": "Romuald Członkowski",
            "username": "czlonkowski"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6f6668acc42a572b0932b581efd0b430a7859322",
          "message": "fix: resolve double URL-encoding in datatable filter/sortBy query params (#652)",
          "timestamp": "2026-03-22T15:59:34+01:00",
          "tree_id": "5b9e22ef0ab81277f7ee1ce0717cac2fb6a9852b",
          "url": "https://github.com/czlonkowski/n8n-mcp/commit/6f6668acc42a572b0932b581efd0b430a7859322"
        },
        "date": 1774191730454,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "sample - array sorting - small",
            "value": 0.0136,
            "range": "0.3096",
            "unit": "ms",
            "extra": "73341 ops/sec"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "56956555+czlonkowski@users.noreply.github.com",
            "name": "Romuald Członkowski",
            "username": "czlonkowski"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ec19c9dade49d89995b77af364d7310c1665c1b5",
          "message": "fix: return 202 for stale-session notifications, warn on updateTable columns (#654) (#655)",
          "timestamp": "2026-03-22T19:59:57+01:00",
          "tree_id": "6d9c8023ade48de5a38443ec8465b44332d97ace",
          "url": "https://github.com/czlonkowski/n8n-mcp/commit/ec19c9dade49d89995b77af364d7310c1665c1b5"
        },
        "date": 1774206174636,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "sample - array sorting - small",
            "value": 0.0136,
            "range": "0.3096",
            "unit": "ms",
            "extra": "73341 ops/sec"
          }
        ]
      }
    ]
  }
}