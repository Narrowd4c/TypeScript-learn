enum Status {
    Start = 1,
    Close,
    Run = 20,
    Stop,
}

const status: Status = Status.Start

const statusNum: Status = 2; // 限定已擁有的數字

enum StatusStr { 
    Start = "START",
    Close = "CLOSE",
    Run = "RUN",
    Stop = "STOP"
}

// const statusStr: StatusStr = 'START'; error
const statusStr: StatusStr = StatusStr.Start


