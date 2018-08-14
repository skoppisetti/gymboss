export class Exercise {
    readonly id: number;
    readonly name: string;
    readonly desc: string;
    readonly tags: string[];
    constructor(options: {id: number, name: string, desc: string, tags: string[]}) {
        this.id = options.id;
        this.name = options.name;
        this.desc = options.desc;
        this.tags = options.tags;
    }
}

export class Routine {
    readonly ex: Exercise;
    readonly reps: number;
    readonly duration: number;
    constructor(options: {ex: Exercise, reps: number, duration: number}) {
        this.ex = options.ex;
        this.reps = options.reps;
        this.duration = options.duration;
    }
}

export class Workout {
    readonly id: number;
    readonly name: string;
    readonly type: string; // Should make this a Enum of 'circuit' 'hiit' etc
    readonly desc: string;
    readonly routine: Routine[];
    constructor(options: {id: number, name: string, type: string, desc: string, routine: Routine[]}) {
        this.id = options.id;
        this.name = options.name;
        this.type = options.type;
        this.desc = options.desc;
        this.routine = options.routine;
    }
}
