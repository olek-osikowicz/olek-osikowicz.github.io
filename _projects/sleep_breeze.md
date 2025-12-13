---
layout: page
title: Sleep Breeze
description: Bluetooth sunrise alarm lamp
img: assets/img/sleep_breeze/logo.png
importance: 1
category: work
tags: [React Native, Bluetooth Low Energy]
# related_publications: true
---




<div class="row">
    <div class="col-12 col-md-8">
        <p>
            I am the developer behind <a href="https://sleepbreeze.eu/">SleepBreeze</a>, a sunrise alarm lamp designed to simulate natural daylight to support a gentle wake-up experience. To simulate the sunrise the lamp gradually increases both brightness and color temperature in the minutes leading up to the alarm.
        </p>
        <p> 
            I designed and implemented a production-ready, cross-platform mobile application in React Native with Expo that controls the device over Bluetooth Low Energy (BLE). The app supports both iOS and Android and is currently available on the Polish market.
        </p>
    </div>
    <div class="col-6 col-md-4">
        {% include video.liquid path="assets/img/sleep_breeze/sunrise_video_cropped.mp4"
           class="img-fluid rounded z-depth-1"
           controls=true autoplay=true %}
        <div class="caption mt-2">
            Sunrise simulation in action.
        </div>
    </div>
</div>

## Key features

- Bluetooth LE device discovery, pairing, and reconnection
- Full light control: power, brightness, color temperature, and RGB (where supported)
- Sunrise alarm with gradual light activation starting 20 minutes before wake-up time
- Synchronized sound alarm triggered at full brightness for a wake-up experience

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/sleep_breeze/connect.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/sleep_breeze/light.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/sleep_breeze/alarm.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>


## Technical highlights

- Reverse-engineered the BLE communication protocol of the smart bulb, including service/characteristic discovery and low-level byte-level command encoding
- Built custom native modules for Android and iOS to ensure reliable alarm execution despite OS-level battery optimizations and background execution limits
- Designed a robust app architecture supporting unreliable BLE connections and device state recovery


## Links

- 🌐 Official website: [https://sleepbreeze.eu/](https://sleepbreeze.eu/)
- 📱 [App store listing](https://apps.apple.com/pl/app/sleep-breeze/id6744585835)
- 📸 [Instagram](https://www.instagram.com/sleepbreeze.eu/)