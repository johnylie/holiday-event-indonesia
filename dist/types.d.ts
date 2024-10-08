export interface Holiday {
    tanggal: string;
    keterangan: string;
    is_cuti: boolean;
}
export interface HolidayResponse {
    holidays: Holiday[];
}
