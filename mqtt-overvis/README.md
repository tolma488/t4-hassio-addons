
_mqtt-overvis_ - a fork from [zephyrus implementaition](https://github.com/zephyrus/mqtt-overvis)
of mqtt integration for overvis devices (I only have [EM-129](https://novatek-electro.ru/produktsiya/ustroystva-s-wi-fi-upravleniem/wi-fi-schetchik-yelektroyenergii-s-funkciey-z.html))

Example config:
```
"MQTT_ID": "overvis",
"MQTT_PATH": "overvis",
"MQTT_HOST": "mqtt://192.168.2.10",
"MQTT_USERNAME": "user",
"MQTT_PASSWORD": "password",
"OVERVIS_HOST": "http://192.168.2.253",
"OVERVIS_PASSWORD": "password",
"OVERVIS_INTERVAL": 5000
```

Sensors:
```
- platform: mqtt
  name: EM129 Voltage
  state_topic: "overvis/status"
  unit_of_measurement: 'V'
  value_template: "{{ value_json.voltage | float }}"
  device_class: voltage

- platform: mqtt
  name: EM129 Current
  state_topic: "overvis/status"
  unit_of_measurement: 'A'
  value_template: "{{ value_json.current | float }}"
  device_class: current

- platform: mqtt
  name: EM129 Power
  state_topic: "overvis/status"
  unit_of_measurement: 'W'
  value_template: "{{ value_json.power | float }}"
  device_class: power

- platform: mqtt
  name: EM129 Energy
  state_topic: "overvis/status"
  unit_of_measurement: 'Wh'
  value_template: "{{ value_json.energy | float }}"
  device_class: energy

```
