
namespace blinker {

    //% block
    //% shim=blinkerCPP::addNumbers
    export function startBlink(timeOn: number, timeOff: number) {
        return timeOff + timeOn;
    }

    //% block
    export function stopBlink() {
        basic.showIcon(IconNames.Happy);
    }



}
