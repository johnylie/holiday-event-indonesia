# holiday-event-indonesia [![npm version](https://badge.fury.io/js/holiday-event-indonesia.svg)](https://badge.fury.io/js/holiday-event-indonesia)

A simple package for retrieving holiday events in Indonesia. This package is designed to be easy to use and provides a straightforward API for fetching holiday data.

## Features

- Retrieves holiday events based on the specified year and month.
- Returns structured data with dates, names, and descriptions of holidays.

## Installation

**npm**

```bash
npm install holiday-event-indonesia --save
```

### Platform compatibility

This project is compatible with **iOS**, **Android**, **Windows** and **macOS**.  
This project supports both **the old** (paper) **and the new architecture** (fabric).  
This project is compatible with [expo](https://docs.expo.dev/).

### Getting Started

If any step seems unclear, please create a pull request.

### Usage

Import the getHolidays function from holiday-event-indonesia and use it like so:

```tsx
import { getHolidays } from "holiday-event-indonesia";

const fetchHolidays = async () => {
  try {
    const holidays = await getHolidays(2024, 10); // Fetch holidays for October 2024
    console.log(holidays); // Output the holiday data
  } catch (error) {
    console.error("Error fetching holidays:", error);
  }
};

fetchHolidays();
```

### API

```tsx
getHolidays(year?: number, month?: number): Promise<HolidayResponse>
```

## Parameters

| Parameter | Type              | Description                                          |
| --------- | ----------------- | ---------------------------------------------------- |
| year      | number (optional) | **Optional**. The year for which to fetch holidays.  |
| month     | number (optional) | **Optional**. The month for which to fetch holidays. |

### Return

A Promise that resolves to a HolidayResponse object containing an array of holidays for the specified year and month.

## Example Response

```json
[
    {
      "date": "2024-10-01",
      "name": "Hari Raya Idul Fitri",
      "description": "Celebration of Eid al-Fitr."
    },
    {
      "date": "2024-10-10",
      "name": "Hari Pahlawan",
      "description": "Heroes Day."
    }
]
```

## Customization Examples

You can customize the holiday data by extending or modifying the logic within your application based on the API response.

### Contributing

Feel free to contribute by adding more languages or improving the time-based logic. Follow these steps:

- Fork the repository.
- Create your feature branch (git checkout -b feature/my-feature).
- Commit your changes (git commit -am 'Add some feature').
- Push to the branch (git push origin feature/my-feature).
- Create a new Pull Request.

### License

MIT

### Translations

This readme is available in:

- [English](./README.md)

## 📝 Author

👤 **Johny Lie**

- Github: [@johnylie](https://github.com/johnylie)

## 🌱 Show your support

Please ⭐️ this repository if this project helped you!

[![](https://img.shields.io/static/v1?label=Sponsor&message=%E2%9D%A4&logo=GitHub&color=%23fe8e86)](https://github.com/sponsors/johnylie)
