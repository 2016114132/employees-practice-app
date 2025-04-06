import express, {Request, Response, NextFunction} from 'express'
import employeeRoutes from './routes/employeeRoutes'
import path from "path"
import { query } from "./config/db";

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(process.cwd(), "src/public")));

app.set("view engine", "ejs");
app.set("views", path.join(process.cwd(), "src/public"));

const loggingMiddleware = (req: Request, res: Response, next: NextFunction) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    next();
};

app.use(loggingMiddleware);

app.use('/', employeeRoutes);

app.use((req: Request, res: Response) => {
    res.status(400).send('Page Not Found');
});

const PORT: number = 3000;

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});