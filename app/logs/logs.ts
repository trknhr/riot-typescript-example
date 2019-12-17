import { template } from "../riot-ts";
import Logs from "./logs.riot";
interface Log {
    text: string;
}

export interface LogComponentProps {
    logs: Log[];
}

@template(Logs)
export class logs {}
