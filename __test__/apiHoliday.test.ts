import { getHolidays } from '../src/api';

jest.mock('axios');
const mockedAxios = require('axios');

describe('getHolidays', () => {
    it('should fetch holidays for the current year', async () => {
        mockedAxios.get.mockResolvedValueOnce({
            data: { holidays: [] }
        });

        const result = await getHolidays();
        expect(result.holidays).toEqual([]);
    });

    it('should handle API errors', async () => {
        mockedAxios.get.mockRejectedValueOnce(new Error('Network Error'));

        await expect(getHolidays()).rejects.toThrow('Failed to fetch holidays: Network Error');
    });
});