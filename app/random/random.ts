import { RiotComponent } from "riot";
import { template } from "../riot-ts";
import Random from "./random.riot";

export interface RandomComponentState {
    number: number | null;
    logs: { text: string }[];
}

export interface RandomComponentProps {
    title: string;
}

@template(Random)
export class random {
    onBeforeMount(
        this: RiotComponent<RandomComponentProps, RandomComponentState>
    ) {
        this.state = {
            number: null,
            logs: []
        };
    }

    clearLogs(this: RiotComponent<RandomComponentProps, RandomComponentState>) {
        this.update({
            logs: []
        });
    }
    generate(
        this: RiotComponent<RandomComponentProps, RandomComponentState>,
        event: MouseEvent
    ) {
        this.update({
            number: Math.floor(Math.random() * 10000),
            logs: (this.state as any).logs.concat({
                text: `Generate button clicked. Event type is ${event.type}`
            })
        });
    }
}

export default Random;
