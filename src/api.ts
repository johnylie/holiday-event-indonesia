import axios from 'axios';
import { HolidayResponse } from './types';

const API_BASE_URL = 'https://dayoffapi.vercel.app/api';

export const getHolidays = async (year?: number, month?: number): Promise<HolidayResponse> => {
    let url = API_BASE_URL;

    if (year) {
        url += `?year=${year}`;
    }
    if (month) {
        url += year ? `&month=${month}` : `?month=${month}`;
    }

    try {
        const response = await axios.get<HolidayResponse>(url);
        return response.data;
    } catch (error: any) {
        throw new Error(`Failed to fetch holidays: ${error.response?.data?.message || error.message}`);
    }
};