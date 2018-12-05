<template>
    <div class="weather">
        <p>Enter the city name to check current weather in it</p>
        <input type="text" :value="query" />
        <button :disabled="!query.length" @click="showWeather">Check</button>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Mixins } from 'vue-property-decorator';
import Weather from './Weather';
import axios from 'axios';

@Component
export default class WeatherPage extends Vue {
    @Prop({ default: 'London' }) query!: string;

    showWeather() {
      console.info('show me the weather!');

      axios.get(`/weather?q=${this.query}&units=metric&&appid=fe22375bc6bd03bf705742ad7859cab2`)
        .then((response) => {
          console.info('r ', response);
        });
    }
}
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
html,
body,
#app {
  height: 100%;
}

#app {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 16px;
  padding: 10px;
  background: rgb(212, 228, 239);
  background: -moz-radial-gradient(
    center,
    ellipse cover,
    rgba(212, 228, 239, 1) 0%,
    rgba(134, 174, 204, 1) 100%
  );
  background: -webkit-radial-gradient(
    center,
    ellipse cover,
    rgba(212, 228, 239, 1) 0%,
    rgba(134, 174, 204, 1) 100%
  );
  background: radial-gradient(
    ellipse at center,
    rgba(212, 228, 239, 1) 0%,
    rgba(134, 174, 204, 1) 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#d4e4ef', endColorstr='#86aecc',GradientType=1 ); /* IE6-9 fallback on horizontal gradient */
}

.weather-input {
  display: flex;
  align-items: center;
  padding: 20px 0;
}

.weather-result {
  text-align: center;
  &__main {
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 5px;
    font-size: 1.3rem;
    font-weight: bold;
  }
  &__details {
    display: flex;
    align-items: center;
    justify-content: space-around;
    color: dimgray;
  }
}

.weather-error {
  color: red;
  font-weight: bold;
}

input {
  width: 75%;
  outline: none;
  height: 20px;
  font-size: 0.8rem;
}

button {
  display: block;
  width: 25%;
  height: 25px;
  outline: none;
  border-radius: 5px;
  white-space: nowrap;
  margin: 0 10px;
  font-size: 0.8rem;
}
</style>
