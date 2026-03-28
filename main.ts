enum MotorDirection {
    //% block="forward"
    Forward = 1,
    //% block="backward"
    Backward = 0
}
enum MotorPin {
    //% block="P0"
    P0 = AnalogPin.P0,
    //% block="P1"
    P1 = AnalogPin.P1,
    //% block="P2"
    P2 = AnalogPin.P2,
    //% block="P8"
    P8 = AnalogPin.P8,
    //% block="P12"
    P12 = AnalogPin.P12,
    //% block="P16"
    P16 = AnalogPin.P16
}
namespace myMotor {

    let motorSpeed = 255

    //% block="set motor speed to %speed"
    //% speed.min=0 speed.max=255 speed.defl=255
    //% speed.shadow="range"
    export function setSpeed(speed: number): void {
        motorSpeed = speed
    }

    //% block="run motor on pin %pin direction %dir"
    //% pin.defl=MotorPin.P0
    //% dir.defl=MotorDirection.Forward
    export function runMotor(pin: MotorPin, dir: MotorDirection): void {
        let pwm = Math.map(motorSpeed, 0, 255, 0, 1023)
        pins.analogWritePin(pin as number, dir === MotorDirection.Forward ? pwm : 1023 - pwm)
    }

    //% block="run motor on pin %pin direction %dir speed %speed"
    //% speed.min=0 speed.max=255 speed.defl=255
    //% pin.defl=MotorPin.P0
    //% dir.defl=MotorDirection.Forward
    export function runMotorSpeed(pin: MotorPin, dir: MotorDirection, speed: number): void {
        let pwm2 = Math.map(speed, 0, 255, 0, 1023)
        pins.analogWritePin(pin as number, dir === MotorDirection.Forward ? pwm2 : 1023 - pwm2)
    }

    //% block="stop motor on pin %pin"
    //% pin.defl=MotorPin.P0
    export function stopMotor(pin: MotorPin): void {
        pins.analogWritePin(pin as number, 0)
    }
}
