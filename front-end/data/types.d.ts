interface TurismesMatriculats {
    date: string;
    turismes: number;
}
interface MortsEnAccidentDeTransit {
    date: string;
    variacion: number;
}

interface Contaminantes {
    name: string;
    Ayer: number;
    Hoy: number;
}
interface ConsumoZonasData {
    name: string;
    previousyear: number;
    currentyear: number;
}
interface FuncionalidadDeLaRedData {
    alta: numer;
    baja: number;
    mantenimiento: number;
}
interface AQIZonas {
    name: string;
    z1: number;
    z2: number;
    z3: number;
    z4: number;
    z5: number;
}
interface EnergyData {
    name: string;
    value: number;
}

interface ConsumoData {
    actual: number;
    mesAnterior: number;
    anoAnterior: number;
}

interface BasicData {
    name: string;
    value: number;
}
type AQIData = BasicData;
type MonthData = BasicData;

interface PrevistoData {
    name: string;
    real: number;
    previsto: number;
}

interface SmartLightData {
    reactive_power: number;
    light_dimming_status: number;
    power_factor: number;
}

interface TurismoData {
    data2019: BasicData[];
    data2020: BasicData[];
}

// bicing Data structure
interface Properties {
    station_id: number;
    name: string;
    capacity: number;
    num_bikes_available: number;
    num_docks_available: number;
    status: string;
    mechanical: number;
    ebike: number;
}

interface Geometry {
    type: string;
    coordinates: number[];
}

interface Feature {
    type: string;
    properties: Properties;
    geometry: Geometry;
}

interface BicingData {
    type: string;
    features: Feature[];
}
