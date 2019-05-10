namespace interface_segregation_demo_1 {

    interface VehicleInterface {
        getSpeed(): number;
        getVehicleType(): string;
        isTaxPayed(): boolean;
        isLightsOn(): boolean;
        isLightsOff(): boolean;
        startEngine(): void;
        accelerate(): number;
        stopEngine(): void;
        startRadio(): void;
        playCd(): void;
        stopRadio(): void;
    }

}

namespace interface_segregation_demo_2 {

    interface VehicleInterface {
        getSpeed(): number;
        getVehicleType(): string;
        isTaxPayed(): boolean;
        isLightsOn(): boolean;
    }

    interface LightsInterface {
        isLightsOn(): boolean;
        isLightsOff(): boolean;
    }

    interface RadioInterface {
        startRadio(): void;
        playCd(): void;
        stopRadio(): void;
    }

    interface EngineInterface {
        startEngine(): void;
        accelerate(): number;
        stopEngine(): void;
    }

}
