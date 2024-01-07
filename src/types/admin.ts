export type TDataAdmin = {
    url?: string;
    nama?: string;
    nomor?: number;
    visiMisi?: string[];
    koalisi?: string[];
    nomorPaslon?: number;
    name?: string;
    vote?: number;
}[];

export type TVote = {
    nomor?: number;
    name?: string;
    votes: number;
};
