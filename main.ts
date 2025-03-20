
namespace blinker {

    //% block
    export function startBlink(timeOn: number, timeOff: number) {
        return timeOff + timeOn;
    }

    //% block
    export function stopBlink() {
        basic.showIcon(IconNames.Happy);
    }



}
