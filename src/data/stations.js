// WorldStream Station Database
// High CPC Countries: USA, UK, Canada, Australia, Germany, Switzerland, Norway, Denmark, Sweden, Finland
// High Population Countries: China, India, Brazil, Indonesia, Pakistan, Nigeria, Bangladesh

export const COUNTRIES = [
  // HIGH CPC COUNTRIES
  { code: "US", name: "United States", flag: "🇺🇸", continent: "North America", cpc: "high", population: 331000000 },
  { code: "GB", name: "United Kingdom", flag: "🇬🇧", continent: "Europe", cpc: "high", population: 67000000 },
  { code: "CA", name: "Canada", flag: "🇨🇦", continent: "North America", cpc: "high", population: 38000000 },
  { code: "AU", name: "Australia", flag: "🇦🇺", continent: "Oceania", cpc: "high", population: 26000000 },
  { code: "DE", name: "Germany", flag: "🇩🇪", continent: "Europe", cpc: "high", population: 84000000 },
  { code: "NO", name: "Norway", flag: "🇳🇴", continent: "Europe", cpc: "high", population: 5400000 },
  { code: "CH", name: "Switzerland", flag: "🇨🇭", continent: "Europe", cpc: "high", population: 8700000 },
  { code: "SE", name: "Sweden", flag: "🇸🇪", continent: "Europe", cpc: "high", population: 10400000 },
  { code: "DK", name: "Denmark", flag: "🇩🇰", continent: "Europe", cpc: "high", population: 5900000 },
  { code: "NL", name: "Netherlands", flag: "🇳🇱", continent: "Europe", cpc: "high", population: 17600000 },
  { code: "FR", name: "France", flag: "🇫🇷", continent: "Europe", cpc: "high", population: 68000000 },
  { code: "JP", name: "Japan", flag: "🇯🇵", continent: "Asia", cpc: "high", population: 126000000 },
  { code: "SG", name: "Singapore", flag: "🇸🇬", continent: "Asia", cpc: "high", population: 5900000 },
  { code: "NZ", name: "New Zealand", flag: "🇳🇿", continent: "Oceania", cpc: "high", population: 5100000 },
  { code: "AT", name: "Austria", flag: "🇦🇹", continent: "Europe", cpc: "high", population: 9100000 },
  // HIGH POPULATION COUNTRIES
  { code: "IN", name: "India", flag: "🇮🇳", continent: "Asia", cpc: "medium", population: 1400000000 },
  { code: "CN", name: "China", flag: "🇨🇳", continent: "Asia", cpc: "medium", population: 1411000000 },
  { code: "BR", name: "Brazil", flag: "🇧🇷", continent: "South America", cpc: "medium", population: 215000000 },
  { code: "ID", name: "Indonesia", flag: "🇮🇩", continent: "Asia", cpc: "medium", population: 277000000 },
  { code: "PK", name: "Pakistan", flag: "🇵🇰", continent: "Asia", cpc: "low", population: 220000000 },
  { code: "NG", name: "Nigeria", flag: "🇳🇬", continent: "Africa", cpc: "low", population: 218000000 },
  { code: "BD", name: "Bangladesh", flag: "🇧🇩", continent: "Asia", cpc: "low", population: 169000000 },
  { code: "MX", name: "Mexico", flag: "🇲🇽", continent: "North America", cpc: "medium", population: 130000000 },
  { code: "PH", name: "Philippines", flag: "🇵🇭", continent: "Asia", cpc: "medium", population: 115000000 },
  { code: "ET", name: "Ethiopia", flag: "🇪🇹", continent: "Africa", cpc: "low", population: 120000000 },
  { code: "EG", name: "Egypt", flag: "🇪🇬", continent: "Africa", cpc: "medium", population: 104000000 },
  { code: "ZA", name: "South Africa", flag: "🇿🇦", continent: "Africa", cpc: "medium", population: 60000000 },
  { code: "KR", name: "South Korea", flag: "🇰🇷", continent: "Asia", cpc: "high", population: 52000000 },
  { code: "IT", name: "Italy", flag: "🇮🇹", continent: "Europe", cpc: "high", population: 60000000 },
  { code: "ES", name: "Spain", flag: "🇪🇸", continent: "Europe", cpc: "high", population: 47000000 },
  { code: "AR", name: "Argentina", flag: "🇦🇷", continent: "South America", cpc: "medium", population: 46000000 },
  { code: "GH", name: "Ghana", flag: "🇬🇭", continent: "Africa", cpc: "low", population: 33000000 },
  { code: "KE", name: "Kenya", flag: "🇰🇪", continent: "Africa", cpc: "medium", population: 55000000 },
  { code: "AE", name: "UAE", flag: "🇦🇪", continent: "Asia", cpc: "high", population: 10000000 },
  { code: "SA", name: "Saudi Arabia", flag: "🇸🇦", continent: "Asia", cpc: "high", population: 35000000 },
];

export const TV_STATIONS = [
  // USA
  { id: "tv-cnn", name: "CNN", country: "US", category: "news", type: "tv", logo: "📺", embedUrl: "https://www.youtube.com/embed/live_stream?channel=UCupvZG-5ko_eiXAX-koEZXg&autoplay=1", description: "Breaking news, world events" },
  { id: "tv-abc", name: "ABC News Live", country: "US", category: "news", type: "tv", logo: "📺", embedUrl: "https://www.youtube.com/embed/live_stream?channel=UCBi2mrWuNuyYy4gbM6fU18Q&autoplay=1", description: "ABC News live 24/7 stream" },
  { id: "tv-fox", name: "Fox News", country: "US", category: "news", type: "tv", logo: "📺", embedUrl: "https://www.youtube.com/embed/live_stream?channel=UCXIJgqnII2ZOINSWNZdcPpQ&autoplay=1", description: "Conservative American news" },
  { id: "tv-msnbc", name: "MSNBC", country: "US", category: "news", type: "tv", logo: "📺", embedUrl: "https://www.youtube.com/embed/live_stream?channel=UCaXkIU1QidjPwiAYu6GcHjg&autoplay=1", description: "Progressive American news" },
  { id: "tv-pbs", name: "PBS NewsHour", country: "US", category: "news", type: "tv", logo: "📺", embedUrl: "https://www.youtube.com/embed/live_stream?channel=UC6ZFN9Tx6xh-skXCuRHCDpQ&autoplay=1", description: "Public Broadcasting Service" },
  { id: "tv-nbc", name: "NBC News NOW", country: "US", category: "news", type: "tv", logo: "📺", embedUrl: "https://www.youtube.com/embed/live_stream?channel=UCeY0bbntWzzVIaj2z3QigXg&autoplay=1", description: "NBC 24/7 streaming news" },
  { id: "tv-cbsn", name: "CBS News 24/7", country: "US", category: "news", type: "tv", logo: "📺", embedUrl: "https://www.youtube.com/embed/live_stream?channel=UC8p1vwvWtl6T73JiExfWs1g&autoplay=1", description: "CBS streaming news" },
  // UK
  { id: "tv-bbc", name: "BBC News", country: "GB", category: "news", type: "tv", logo: "📺", embedUrl: "https://www.youtube.com/embed/live_stream?channel=UC16niRr50-MSBwiO3YDb3RA&autoplay=1", description: "British Broadcasting Corporation" },
  { id: "tv-skynews", name: "Sky News", country: "GB", category: "news", type: "tv", logo: "📺", embedUrl: "https://www.youtube.com/embed/live_stream?channel=UCoMdktPbSTixAyNGwb-UYkQ&autoplay=1", description: "Sky News live" },
  // INDIA
  { id: "tv-ndtv", name: "NDTV 24x7", country: "IN", category: "news", type: "tv", logo: "📺", embedUrl: "https://www.youtube.com/embed/live_stream?channel=UCZFMm1mMw0F81Z37aaEzTUA&autoplay=1", description: "India's leading news network" },
  { id: "tv-aajtak", name: "Aaj Tak", country: "IN", category: "news", type: "tv", logo: "📺", embedUrl: "https://www.youtube.com/embed/live_stream?channel=UCt4t-jeY85JegMlZ-E5UWtA&autoplay=1", description: "Hindi news channel" },
  { id: "tv-republic", name: "Republic TV", country: "IN", category: "news", type: "tv", logo: "📺", embedUrl: "https://www.youtube.com/embed/live_stream?channel=UCmM5lSP_7_xCRVuHMRq0VKg&autoplay=1", description: "Republic World news" },
  // GERMANY
  { id: "tv-dw", name: "DW News", country: "DE", category: "news", type: "tv", logo: "📺", embedUrl: "https://www.youtube.com/embed/live_stream?channel=UCknLrEdhRCp1aegoMqRaCZg&autoplay=1", description: "Deutsche Welle international" },
  // FRANCE
  { id: "tv-france24", name: "France 24", country: "FR", category: "news", type: "tv", logo: "📺", embedUrl: "https://www.youtube.com/embed/live_stream?channel=UCQfwfsi5VrQ8yKZ-UGuxtML&autoplay=1", description: "French international news" },
  { id: "tv-france24-fr", name: "France 24 FR", country: "FR", category: "news", type: "tv", logo: "📺", embedUrl: "https://www.youtube.com/embed/live_stream?channel=UCq2rogpnTMo0IIXPbKGlX3w&autoplay=1", description: "France 24 en Français" },
  // JAPAN
  { id: "tv-nhkworld", name: "NHK World Japan", country: "JP", category: "news", type: "tv", logo: "📺", embedUrl: "https://www.youtube.com/embed/live_stream?channel=UC6iS6MxBGWqRzNnnDpqoKmw&autoplay=1", description: "Japan's public broadcaster" },
  // AUSTRALIA
  { id: "tv-abc-au", name: "ABC Australia", country: "AU", category: "news", type: "tv", logo: "📺", embedUrl: "https://www.youtube.com/embed/live_stream?channel=UCVgO39Bk5sMo66-6o6Spn6Q&autoplay=1", description: "Australian Broadcasting Corporation" },
  { id: "tv-skynews-au", name: "Sky News Australia", country: "AU", category: "news", type: "tv", logo: "📺", embedUrl: "https://www.youtube.com/embed/live_stream?channel=UCiAGFgNSsc3xnQUaADRESZA&autoplay=1", description: "Sky News Australia" },
  // MIDDLE EAST
  { id: "tv-aljazeera", name: "Al Jazeera English", country: "AE", category: "news", type: "tv", logo: "📺", embedUrl: "https://www.youtube.com/embed/live_stream?channel=UCNye-wNBqNL5ZzHSJj3l8Bg&autoplay=1", description: "Al Jazeera international" },
  // SOUTH KOREA
  { id: "tv-arirang", name: "Arirang TV", country: "KR", category: "news", type: "tv", logo: "📺", embedUrl: "https://www.youtube.com/embed/live_stream?channel=UCsjRp_wEYFQCQMkFi0ljvOg&autoplay=1", description: "Korean international channel" },
  // BRAZIL
  { id: "tv-band", name: "Band News TV", country: "BR", category: "news", type: "tv", logo: "📺", embedUrl: "https://www.youtube.com/embed/live_stream?channel=UCfnGeqb8w_GcaluE6EXzDYQ&autoplay=1", description: "Brazilian news 24h" },
  // NIGERIA
  { id: "tv-channels", name: "Channels TV", country: "NG", category: "news", type: "tv", logo: "📺", embedUrl: "https://www.youtube.com/embed/live_stream?channel=UC9ENkBUFalNUX8cAAtHfNXg&autoplay=1", description: "Nigeria's premier TV channel" },
  // RUSSIA
  { id: "tv-rt", name: "RT News", country: "RU", category: "news", type: "tv", logo: "📺", embedUrl: "https://www.youtube.com/embed/live_stream?channel=UCpwvZY9Z1M6Gl8oBEUBOXWQ&autoplay=1", description: "Russia Today international" },
  // SOUTH AFRICA
  { id: "tv-sabc", name: "SABC News", country: "ZA", category: "news", type: "tv", logo: "📺", embedUrl: "https://www.youtube.com/embed/live_stream?channel=UCfMkKxM3fmKqpGekCq4O7KA&autoplay=1", description: "South Africa's public broadcaster" },
  // KENYA
  { id: "tv-ntvke", name: "NTV Kenya", country: "KE", category: "news", type: "tv", logo: "📺", embedUrl: "https://www.youtube.com/embed/live_stream?channel=UCXjnj-rungACEZyqgAk0T2Q&autoplay=1", description: "Kenya's NTV live" },
  // MORE GLOBAL
  { id: "tv-bloomberg", name: "Bloomberg TV", country: "US", category: "business", type: "tv", logo: "📺", embedUrl: "https://www.youtube.com/embed/live_stream?channel=UCIALMKvObZNtJ6AmdCLP7Lg&autoplay=1", description: "Global business & finance news" },
  { id: "tv-euronews", name: "Euronews", country: "FR", category: "news", type: "tv", logo: "📺", embedUrl: "https://www.youtube.com/embed/live_stream?channel=UCUWRIbMoZZKlGBUvXMjg4QA&autoplay=1", description: "European news network" },
  { id: "tv-cnbc", name: "CNBC", country: "US", category: "business", type: "tv", logo: "📺", embedUrl: "https://www.youtube.com/embed/live_stream?channel=UCrp_UI8XtuYfpiqluWLD7Lw&autoplay=1", description: "Business news worldwide" },
  { id: "tv-nasa", name: "NASA TV", country: "US", category: "science", type: "tv", logo: "📺", embedUrl: "https://www.youtube.com/embed/21X5lGlDOfg?autoplay=1", description: "Live from space - NASA" },
  { id: "tv-cgtn", name: "CGTN", country: "CN", category: "news", type: "tv", logo: "📺", embedUrl: "https://www.youtube.com/embed/live_stream?channel=UCbOCbp7wRfMTuNGFF9Lx3Ng&autoplay=1", description: "China Global Television Network" },
  { id: "tv-trt", name: "TRT World", country: "TR", category: "news", type: "tv", logo: "📺", embedUrl: "https://www.youtube.com/embed/live_stream?channel=UC7BPCgTHi9J7pUcVRFpnFkw&autoplay=1", description: "Turkish public broadcaster" },
  { id: "tv-dd-india", name: "DD India", country: "IN", category: "news", type: "tv", logo: "📺", embedUrl: "https://www.youtube.com/embed/live_stream?channel=UCF57Hm7rCdx9XDVD1ZR-9pQ&autoplay=1", description: "Doordarshan national channel" },
  { id: "tv-timesnow", name: "Times Now", country: "IN", category: "news", type: "tv", logo: "📺", embedUrl: "https://www.youtube.com/embed/live_stream?channel=UCtqoFoMOkQ-WTBe8E5c_Efg&autoplay=1", description: "Times Network India" },
];

export const RADIO_STATIONS = [
  // USA
  { id: "radio-npr", name: "NPR News", country: "US", category: "news", type: "radio", logo: "📻", streamUrl: "https://npr-ice.streamguys1.com/live.mp3", description: "National Public Radio USA" },
  { id: "radio-bbc-r4", name: "BBC Radio 4", country: "GB", category: "talk", type: "radio", logo: "📻", streamUrl: "http://stream.live.vc.bbcmedia.co.uk/bbc_radio_fourfm", description: "UK talk & current affairs" },
  { id: "radio-bbc-r1", name: "BBC Radio 1", country: "GB", category: "music", type: "radio", logo: "📻", streamUrl: "http://stream.live.vc.bbcmedia.co.uk/bbc_radio_one", description: "UK contemporary pop & dance" },
  { id: "radio-bbc-r2", name: "BBC Radio 2", country: "GB", category: "music", type: "radio", logo: "📻", streamUrl: "http://stream.live.vc.bbcmedia.co.uk/bbc_radio_two", description: "UK adult contemporary music" },
  { id: "radio-bbc-ws", name: "BBC World Service", country: "GB", category: "news", type: "radio", logo: "📻", streamUrl: "http://stream.live.vc.bbcmedia.co.uk/bbc_world_service", description: "International BBC news radio" },
  { id: "radio-vooa", name: "Voice of America", country: "US", category: "news", type: "radio", logo: "📻", streamUrl: "https://voa-ingest.akamaized.net/hls/live/2035144/VOAENGLISHUS/master.m3u8", description: "US government international radio" },
  { id: "radio-rfi", name: "RFI English", country: "FR", category: "news", type: "radio", logo: "📻", streamUrl: "https://rfienglish.ice.infomaniak.ch/rfienglish-high.mp3", description: "Radio France International" },
  { id: "radio-dw-radio", name: "DW Radio", country: "DE", category: "news", type: "radio", logo: "📻", streamUrl: "https://rautemusik-sc-thn.stream.laut.fm/rautemusik", description: "Deutsche Welle Radio" },
  { id: "radio-canada", name: "CBC Radio One", country: "CA", category: "news", type: "radio", logo: "📻", streamUrl: "https://cbcliveradio.cbc.ca/live/CBC_R1_TOR.stream/playlist.m3u8", description: "Canadian Broadcasting Corporation" },
  { id: "radio-abc-au", name: "ABC Radio National", country: "AU", category: "news", type: "radio", logo: "📻", streamUrl: "https://live-radio01.mediahubaustralia.com/2RNW/mp3/", description: "Australia's Radio National" },
  { id: "radio-nhk", name: "NHK World Radio Japan", country: "JP", category: "news", type: "radio", logo: "📻", streamUrl: "https://nhkworld.webcdn.stream.ne.jp/www11/nhkworld-tv/live/hls/en/index.m3u8", description: "NHK World Radio" },
  { id: "radio-all-india", name: "All India Radio", country: "IN", category: "news", type: "radio", logo: "📻", streamUrl: "https://air.pc.cdn.bitgravity.com/air/live/pbaudio001/playlist.m3u8", description: "India's national radio" },
  { id: "radio-abn", name: "ABN Radio Nigeria", country: "NG", category: "music", type: "radio", logo: "📻", streamUrl: "https://stream.zeno.fm/nf0vabv3b9zuv", description: "Nigerian Afrobeats & news" },
  { id: "radio-kenya", name: "KBC Radio Kenya", country: "KE", category: "news", type: "radio", logo: "📻", streamUrl: "https://stream.zeno.fm/vbkp25q40vhvv", description: "Kenya Broadcasting Corporation" },
  { id: "radio-sabc", name: "SABC Metro FM", country: "ZA", category: "music", type: "radio", logo: "📻", streamUrl: "https://bbcmedia.ic.llnwd.net/stream/bbcmedia_radio2_mf_p", description: "South Africa Metro FM" },
  { id: "radio-abc-jazz", name: "ABC Jazz", country: "AU", category: "music", type: "radio", logo: "📻", streamUrl: "https://live-radio01.mediahubaustralia.com/JAZW/mp3/", description: "Australian jazz music" },
  { id: "radio-jazz24", name: "Jazz24", country: "US", category: "music", type: "radio", logo: "📻", streamUrl: "http://live.wostreaming.net/manifest/ppm-jazz24aacstream-ibc1.m3u8", description: "24/7 Jazz from Seattle" },
  { id: "radio-classicfm", name: "Classic FM UK", country: "GB", category: "music", type: "radio", logo: "📻", streamUrl: "http://media-ice.musicradio.com/ClassicFMMP3", description: "Classical music UK" },
  { id: "radio-rnz", name: "RNZ National", country: "NZ", category: "news", type: "radio", logo: "📻", streamUrl: "https://rnz-icecast.cdnz.co.nz/national/mp3_128", description: "Radio New Zealand National" },
  { id: "radio-rthk", name: "RTHK Radio 3", country: "HK", category: "talk", type: "radio", logo: "📻", streamUrl: "https://rthklive1.rthk.hk/radio3", description: "Hong Kong English radio" },
  { id: "radio-sri", name: "Swiss Radio International", country: "CH", category: "news", type: "radio", logo: "📻", streamUrl: "https://stream.srg-ssr.ch/m/rsi_la1/mp3_128", description: "Swiss public radio" },
  { id: "radio-yle", name: "YLE Radio 1", country: "FI", category: "talk", type: "radio", logo: "📻", streamUrl: "https://icecast.yle.fi/radio1.mp3", description: "Finnish national radio" },
  { id: "radio-sr", name: "Sveriges Radio P1", country: "SE", category: "talk", type: "radio", logo: "📻", streamUrl: "https://sverigesradio.se/topsy/direkt/132-hi.mp3", description: "Swedish public radio" },
  { id: "radio-nrk", name: "NRK P1", country: "NO", category: "talk", type: "radio", logo: "📻", streamUrl: "https://lyd.nrk.no/nrk_radio_p1_ostlandssendingen_aac_h", description: "Norwegian public radio" },
  { id: "radio-dr", name: "DR P1", country: "DK", category: "talk", type: "radio", logo: "📻", streamUrl: "https://live-icy.dr.dk/A/A03H.mp3", description: "Danish public radio" },
];

export const CATEGORIES = [
  { id: "all", name: "All", icon: "🌐" },
  { id: "news", name: "News", icon: "📰" },
  { id: "business", name: "Business", icon: "💼" },
  { id: "music", name: "Music", icon: "🎵" },
  { id: "talk", name: "Talk", icon: "🎙️" },
  { id: "science", name: "Science", icon: "🔬" },
  { id: "entertainment", name: "Entertainment", icon: "🎬" },
];

export const CONTINENTS = [
  { id: "all", name: "All Regions" },
  { id: "North America", name: "North America" },
  { id: "Europe", name: "Europe" },
  { id: "Asia", name: "Asia" },
  { id: "Africa", name: "Africa" },
  { id: "South America", name: "South America" },
  { id: "Oceania", name: "Oceania" },
];

export function getStationsByCountry(countryCode, type = "all") {
  const tvStations = type === "radio" ? [] : TV_STATIONS.filter(s => s.country === countryCode);
  const radioStations = type === "tv" ? [] : RADIO_STATIONS.filter(s => s.country === countryCode);
  return [...tvStations, ...radioStations];
}

export function getAllStations() {
  return [...TV_STATIONS, ...RADIO_STATIONS];
}

export function getCountryByCode(code) {
  return COUNTRIES.find(c => c.code === code);
}
