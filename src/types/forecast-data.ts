export interface ForecastData {
  latitude: number
  longitude: number
  generationtime_ms: number
  utc_offset_seconds: number
  timezone: string
  timezone_abbreviation: string
  elevation: number
  daily_units: DailyUnits
  daily: Daily
}

export interface DailyUnits {
  time: string
  temperature_2m_min: string
  temperature_2m_max: string
  snowfall_sum: string
}

export interface Daily {
  time: string[]
  temperature_2m_min: number[]
  temperature_2m_max: number[]
  snowfall_sum: number[]
}
  