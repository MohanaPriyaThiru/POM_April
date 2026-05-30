export class SearchHotel {
  constructor(page) {
    this.page = page;
    this.location = page.locator("#location");
    this.hotel = page.locator("#hotels");
    this.roomType = page.locator("#room_type");
    this.roomNo = page.locator("#room_nos");
    this.inDate = page.locator("#datepick_in");
    this.outDate = page.locator("#datepick_out");
    this.adult = page.locator("#adult_room");
    this.button = page.locator("#Submit");
  }

  async searchhotelfunction({
    location,
    hotelName,
    roomType,
    roomNum,
    checkIn,
    checkOut,
    adult,
  }) {
    await this.location.selectOption(location);
    await this.hotel.selectOption(hotelName);
    await this.roomType.selectOption(roomType);
    await this.roomNo.selectOption(roomNum);
    await this.inDate.fill(checkIn);
    await this.outDate.fill(checkOut);
    await this.adult.selectOption(adult);
    await this.button.click();
  }
}
