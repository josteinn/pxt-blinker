
namespace blinker {

    //% block
    //% shim=blinker::startBlink
    export function startBlink(timeOn: number, timeOff: number) {
        return timeOff + timeOn;
    }

    //% block
    export function stopBlink() {
        basic.showIcon(IconNames.Happy);
    }



}
