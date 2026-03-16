// ─── Sandbox Types ──────────────────────────────────────────────
export interface SandboxFile {
  content: string;
  locked: boolean;
}

export interface ExecResult {
  status: number;
  body: unknown;
  logs: string[];
}

export interface Challenge {
  id: number;
  title: string;
  description: string;
  hint: string;
  validate: (files: Record<string, SandboxFile>) => boolean;
}

// ─── Initial State (Empty Project) ──────────────────────────────
export const INITIAL_FILES: Record<string, SandboxFile> = {
  'README.md': {
    locked: false,
    content: `# ExpressKit Sandbox // OPERATIONAL_MANUAL

Welcome to the ExpressKit Integrated Runtime. This environment simulates a production-grade backend deployment.

## 🛠️ HELP_MENU // AVAILABLE_OPERATIONS

╔══════════════════════════════════════════════╗
║            AVAILABLE COMMANDS                ║
╚══════════════════════════════════════════════╝

  help           — display this help message
  clear          — clear terminal output
  ls             — list directory contents
  cat [file]     — view file contents
  npx @pd241008/expresskit init 
                 — initialize production boilerplate

---

### [ GETTING_STARTED ]
1. Open the **Integrated Terminal** below.
2. Run: \`npx @pd241008/expresskit init\`
3. This will mount the full production node and enable active health monitoring.`,
  }
};

// ─── Production Template (From CLI Init) ────────────────────────
export const PRODUCTION_TEMPLATE: Record<string, SandboxFile> = {
  'README.md': {
    locked: false,
    content: `# ExpressKit Production Node // ACTIVE
The production node has been initialized. All internal systems are linked to the dashboard telemetry.

## 📡 PROJECT_HEALTH_MONITORING
Available Health Endpoints:
- \`GET /\`               -> Base Connectivity
- \`GET /health\`        -> Logic Layer Check
- \`GET /system/status\` -> Environment Telemetry

Use the **Simulation Dashboard** to send requests to these endpoints.`,
  },

  'src/server.ts': {
    locked: true,
    content: `import app from './app';
import { bridge } from './config/expresskit.bridge';

const port = 3000;

app.listen(port, () => {
  bridge.onStart();
  console.log('[ctOS] ExpressKit Production Server Initialized');
  console.log(\`[ctOS] Listening on port \${port}\`);
});`,
  },

  'src/app.ts': {
    locked: true,
    content: `import { ExpressKit } from '@expresskit/core';
import healthRouter from './routes/health/route';
import { healthMiddleware } from './middleware/health_middleware';

const app = new ExpressKit();

app.use(healthMiddleware);
app.registerRoutes(healthRouter);

export default app;`,
  },

  'src/config/expresskit.config.ts': {
    locked: true,
    content: `export default {
  name: 'express-backend',
  env: 'production',
  version: '1.0.0',
  security: {
    cors: true
  }
};`,
  },

  'src/config/expresskit.bridge.ts': {
    locked: true,
    content: `export const bridge = {
  onStart: () => {
    console.log('[SYSTEM] Bridge connected to internal systems...');
  }
};`,
  },

  'src/routes/health/route.ts': {
    locked: false,
    content: `import { healthController } from '../../controllers/health_controller';

const routes = [
  {
    method: 'GET',
    path: '/',
    handler: healthController.root
  },
  {
    method: 'GET',
    path: '/health',
    handler: healthController.check
  },
  {
    method: 'GET',
    path: '/system/status',
    handler: healthController.status
  }
];

export default routes;`,
  },

  'src/controllers/health_controller.ts': {
    locked: false,
    content: `import { healthService } from '../services/health_service';

export const healthController = {
  root: (req, res) => {
    res.json({ 
      node: 'ExpressKit-Production',
      status: 'OPERATIONAL',
      message: 'Uplink established through ctOS interface'
    });
  },

  check: (req, res) => {
    const isHealthy = healthService.getHealthStatus();
    res.json({ status: isHealthy ? 'UP' : 'DOWN', timestamp: new Date() });
  },

  status: (req, res) => {
    res.json({
      uptime: process.uptime(),
      memory: process.memoryUsage(),
      framework: 'ExpressKit'
    });
  }
};`,
  },

  'src/middleware/health_middleware.ts': {
    locked: false,
    content: `export const healthMiddleware = (req, res, next) => {
  console.log(\`[HEALTH-CHECK] \${req.method} \${req.path}\`);
  next();
};`,
  },

  'src/services/health_service.ts': {
    locked: false,
    content: `export const healthService = {
  getHealthStatus: () => true
};`,
  },

  '.expresskit/README': {
    locked: true,
    content: 'ExpressKit internal system data.',
  },

  'node_modules/.bin/expresskit': {
    locked: true,
    content: 'ExpressKit binary.',
  },

  'src/models/.gitkeep': {
    locked: true,
    content: '',
  },

  'src/utils/.gitkeep': {
    locked: true,
    content: '',
  },

  '.env': {
    locked: false,
    content: `PORT=3000\nNODE_ENV=production\nAPI_KEY=ctos_secret_key`,
  },

  '.env.example': {
    locked: true,
    content: `PORT=3000\nNODE_ENV=development\nAPI_KEY=`,
  },

  '.gitignore': {
    locked: true,
    content: `node_modules/\n.env\ndist/`,
  },

  'package.json': {
    locked: true,
    content: `{
  "name": "express-backend",
  "version": "1.0.0",
  "dependencies": {
    "@pd241008/expresskit": "^1.0.4"
  }
}`,
  },

  'package-lock.json': {
    locked: true,
    content: `{ "name": "express-backend", "lockfileVersion": 2 }`,
  },
  
  'tsconfig.json': {
    locked: true,
    content: `{ "compilerOptions": { "target": "ESNext", "module": "CommonJS" } }`,
  }
};

// ─── Execution Engine ───────────────────────────────────────────
function cleanForEval(code: string): string {
  return code
    .replace(/^import\s+.*$/gm, '')
    .replace(/^export\s+const\s+(\w+)/gm, 'exports.$1')
    .replace(/^export\s+default\s+/gm, 'exports.default = ')
    .replace(/\/\/.*$/gm, '')
    .trim();
}

export function executeRequest(
  files: Record<string, SandboxFile>,
  method: string,
  path: string,
  body?: unknown,
): ExecResult {
  const logs: string[] = [];
  const logFn = (...args: unknown[]) => {
    logs.push(args.map(a => typeof a === 'object' ? JSON.stringify(a, null, 2) : String(a)).join(' '));
  };
  const mockConsole = { log: logFn, error: logFn, warn: logFn, info: logFn };

  try {
    const exports: any = {};
    const evalOrder = [
      'src/config/expresskit.bridge.ts',
      'src/services/health_service.ts',
      'src/controllers/health_controller.ts',
      'src/middleware/health_middleware.ts',
      'src/routes/health/route.ts'
    ];

    evalOrder.forEach(key => {
      if (files[key]) {
        const cleaned = cleanForEval(files[key].content);
        const fn = new Function('console', 'exports', ...Object.keys(exports), cleaned);
        fn(mockConsole, exports, ...Object.values(exports));
      }
    });

    const routes = exports.default || exports.routes || [];
    const route = routes.find((r: any) => r.method === method && r.path === path);

    if (!route) return { status: 404, body: { error: `Cannot ${method} ${path}` }, logs };

    const req = { method, path, body: body || {} };
    const res = {
      _status: 200,
      _body: null as any,
      json(d: any) { this._body = d; },
      status(c: number) { this._status = c; return this; }
    };

    if (exports.healthMiddleware) {
      exports.healthMiddleware(req, res, () => { route.handler(req, res); });
    } else {
      route.handler(req, res);
    }

    return { status: res._status, body: res._body, logs };
  } catch (err) {
    return { status: 500, body: { error: err instanceof Error ? err.message : 'Runtime error' }, logs };
  }
}

export function getBootLogs(files: Record<string, SandboxFile>): string[] {
  const logs = [
    '[ctOS SANDBOX] Initializing ExpressKit Production Runtime...',
    '[ctOS SANDBOX] Loading src/server.ts...',
  ];

  if (!files['src/server.ts']) {
    logs.push('[ctOS SANDBOX] ERROR: Project not initialized. Run "npx @pd241008/expresskit init"');
    return logs;
  }

  logs.push('[ctOS SANDBOX] Bridge: Connected to internal systems');
  logs.push('[ctOS SANDBOX] Routes registered:');
  logs.push('  ├─ GET /');
  logs.push('  ├─ GET /health');
  logs.push('  ├─ GET /system/status');
  logs.push('[ctOS SANDBOX] Server ready on port 3000');
  return logs;
}

export function validateCode(code: string) {
  return { valid: true };
}

export const CHALLENGES: Challenge[] = [];
