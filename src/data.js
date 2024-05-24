export const data = [
  {
    id: 1,
    title: "Text To Speech Neural/Google",
    description:
      "Convert text to audio quickly, supports over 99+ languages ​​and 3900+ speakers.\nChoose from our neural or google engine and many options for different AI voices. This api is made in India.\n\nCheck out the latest Version of this api where you can download audio as MP3 and also add much more amazing features to the audio in. 28+ languages, checkout this link. https://rapidapi.com/rahilkhan224/api/text-to-speech-for-28-languages\n\n🌐 Exciting News for Text-to-Speech API Users! 🌐\n\nWe’re thrilled to announce the addition of new language codes for an enhanced experience with our Text-to-Speech API. Now you can customize your speech output in various languages. Here are the language codes available:\n\n“en”, “en-AU”, “en-US”, “en-CA”, “en-GB”, “en-NG”, “en-ZA”, “af”, “ar”, “arb”, “bn”, “bg”, “ca”, “cs”, “cmn-CN”, “cmn-TW”, “zh-HK”, “yue-CN”, “da”, “de”, “el”, “et”, “es”, “fa-IR”, “fil”, “fi-FI”, “fr”, “he-IL”, “hi”, “hr-HR”, “hu-HU”, “id-ID”, “is-IS”, “it”, “ja-JP”, “ka”, “kk”, “ko-KR”, “lt”, “lv”, “ms-MY”, “nb”, “ne”, “nl”, “pl”, “pt”, “ro”, “ru”, “sk”, “si”, “sl”, “sv”, “sw”, “ta-IN”, “ta-LK”, “ta-MY”, “ta-SG”, “te”, “th”, “tr”, “uk”, “ur-IN”, “ur-PK”, “vi”, “zh”\n\nBut that’s not all! We’ve also introduced two new powerful engines, “resemble” and “azure,” to elevate your TTS experience. Alongside this update, we’ve added exciting character voices:\n\nNarrator\n\nEngine: Resemble\nLanguage Code: en-US\nGwyneth\n\nEngine: Resemble\nLanguage Code: en-US\nSnoop\n\nEngine: Resemble\nLanguage Code: en-US\nMr. Beast\n-Engine: Resemble\nTry them out and give your text a unique voice with our latest additions! 🚀🗣️",
    file: {
      url: "//images.ctfassets.net/moq7l799ngye/UP227QS0AUtuJPEOYzv3O/abe15420d539c3d77574f7e0cef0535f/61651770-7e3e-4bdc-96c0-1a5b64f64991.png",
    },

    developer: "AK IT services",
    usage:
      "const axios = require('axios');\n\nconst options = {\n  method: 'GET',\n  url: 'https://text-to-speech-neural-google.p.rapidapi.com/v1/synthesis/client-voices',\n  headers: {\n    'X-RapidAPI-Key': 'c772e8e859msh0f7037843e00040p13e75bjsn00032879cc2d',\n    'X-RapidAPI-Host': 'text-to-speech-neural-google.p.rapidapi.com'\n  }\n};\n\ntry {\n\tconst response = await axios.request(options);\n\tconsole.log(response.data);\n} catch (error) {\n\tconsole.error(error);\n}",
    popularity: 9.3,
    category: "Data",
  },

  {
    id: 2,
    title: "Twitter",
    description: "Twitter API",
    file: {
      url: "//images.ctfassets.net/moq7l799ngye/5JlsTD0t3UrYPdxl4u3Y22/2786eb78f100ab869e607160b691c3ee/65e2090f-9564-412a-8586-b6ac23fdfdd6.png",
    },
    developer: "Omar M'Haimdat",
    usage:
      "const axios = require('axios');\n\nconst options = {\n  method: 'GET',\n  url: 'https://twitter154.p.rapidapi.com/user/details',\n  params: {\n    username: 'omarmhaimdat',\n    user_id: '96479162'\n  },\n  headers: {\n    'X-RapidAPI-Key': 'c772e8e859msh0f7037843e00040p13e75bjsn00032879cc2d',\n    'X-RapidAPI-Host': 'twitter154.p.rapidapi.com'\n  }\n};\n\ntry {\n\tconst response = await axios.request(options);\n\tconsole.log(response.data);\n} catch (error) {\n\tconsole.error(error);\n}",
    popularity: 9.9,
    category: "Data",
  },
  {
    id: 3,
    title: "Yahoo Finance",
    description:
      "This API reproduces live PUBLIC data and features of YH. The response data is always live and synced with the site at request time. You are going to get almost everything that you see PUBLICLY on the site.",
    file: {
      url: "//images.ctfassets.net/moq7l799ngye/5P4KO1wZhgB6CztdamlCD1/a80790b1e527e7484a231959a14b9220/04b2a24093095ca016e1d83107aff2b9.png",
    },
    developer: "Api Dojo",
    usage:
      "const axios = require('axios');\n\nconst options = {\n  method: 'GET',\n  url: 'https://apidojo-yahoo-finance-v1.p.rapidapi.com/auto-complete',\n  params: {\n    q: 'tesla',\n    region: 'US'\n  },\n  headers: {\n    'X-RapidAPI-Key': 'c772e8e859msh0f7037843e00040p13e75bjsn00032879cc2d',\n    'X-RapidAPI-Host': 'apidojo-yahoo-finance-v1.p.rapidapi.com'\n  }\n};\n\ntry {\n\tconst response = await axios.request(options);\n\tconsole.log(response.data);\n} catch (error) {\n\tconsole.error(error);\n}",
    popularity: 9.9,
    category: "Finance",
  },

  {
    id: 4,
    title: "Real-Time Amazon Data",
    description:
      "Fast and Reliable Product Searches, Offers, Reviews, Best Sellers, Deals + More on Amazon in Real-Time. Fast, Reliable, and Comprehensive API for searching Amazon products, offers, and reviews in real time. Speed and simplicity, combined with its ability to extract and analyze reviews, make it an ideal choice for developers, marketers, and researchers who need to access up-to-date information about Amazon products and services.",
    file: {
      url: "//images.ctfassets.net/moq7l799ngye/1wegxCzVaPBSexgQiKx0Dc/91562ba982d6a607d5d3cbe27d4025c1/55d31cce-656a-40a5-8680-98fe6e329bf2.png",
    },
    developer: "OpenWeb Ninja",
    usage:
      "const axios = require('axios');\n\nconst options = {\n  method: 'GET',\n  url: 'https://real-time-amazon-data.p.rapidapi.com/search',\n  params: {\n    query: 'Phone',\n    page: '1',\n    country: 'US'\n  },\n  headers: {\n    'X-RapidAPI-Key': 'c772e8e859msh0f7037843e00040p13e75bjsn00032879cc2d',\n    'X-RapidAPI-Host': 'real-time-amazon-data.p.rapidapi.com'\n  }\n};\n\ntry {\n\tconst response = await axios.request(options);\n\tconsole.log(response.data);\n} catch (error) {\n\tconsole.error(error);\n}",
    popularity: 9.9,
    category: "eCommerce",
  },

  {
    id: 5,
    title: "JSearch",
    description:
      "Fast and Reliable Job Searches on LinkedIn, Indeed, Glassdoor, + Others on Google for Jobs in Real-Time.\n\nJSearch by OpenWeb Ninja is a fast, reliable, and comprehensive jobs API. As the most comprehensive and maintained option available, JSearch empowers you to seamlessly access most-up-to-date job postings and salary information in real-time from Google for Jobs - the largest job aggregate on the web.\n\nComprehensive in terms of data and capabilities:\n✨ Covering most of the major (and minor) jobs sites - LinkedIn, Indeed, Glassdoor, ZipRecruiter, and many others.\n✨ More than 30 data points per job.\n✨ Extensive search, querying and filtering capabilities.\n\nChat with us live on Discord: https://discord.gg/wxJxGsZgha",
    file: {
      url: "//images.ctfassets.net/moq7l799ngye/5aLXNDA5n9LqX7PiYUX4Ju/b6e54ac555f592b75d8ac229600a0401/a99a424f-cd68-4345-932c-46941476bc89.png",
    },
    developer: "OpenWeb Ninja",
    usage:
      "const axios = require('axios');\n\nconst options = {\n  method: 'GET',\n  url: 'https://jsearch.p.rapidapi.com/search',\n  params: {\n    query: 'Python developer in Texas, USA',\n    page: '1',\n    num_pages: '1'\n  },\n  headers: {\n    'X-RapidAPI-Key': 'c772e8e859msh0f7037843e00040p13e75bjsn00032879cc2d',\n    'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'\n  }\n};\n\ntry {\n\tconst response = await axios.request(options);\n\tconsole.log(response.data);\n} catch (error) {\n\tconsole.error(error);\n}",
    popularity: 9.9,
    category: "Data",
  },

  {
    id: 6,
    title: "Arbeitsagentur Jobsuche API",
    description:
      "Die größte Stellendatenbank Deutschlands durchsuchen, Details zu Stellenanzeigen und Informationen über Arbeitgeber abrufen.\nhttps://jobsuche.api.bund.dev/",
    file: {
      url: "//images.ctfassets.net/moq7l799ngye/46UBvot5aj8UF76lRpPvFH/adfbb2a8dcb780d30f41f54eac760705/Arbeitsagentur.png",
    },
    developer: "A-Amt dev",
    usage:
      "const axios = require('axios');\n\nconst options = {\n  method: 'GET',\n  url: 'https://arbeitsagentur-employement-agency.p.rapidapi.com/get-token',\n  params: {\n    email: '<REQUIRED>'\n  },\n  headers: {\n    'X-RapidAPI-Key': 'c772e8e859msh0f7037843e00040p13e75bjsn00032879cc2d',\n    'X-RapidAPI-Host': 'arbeitsagentur-employement-agency.p.rapidapi.com'\n  }\n};\n\ntry {\n\tconst response = await axios.request(options);\n\tconsole.log(response.data);\n} catch (error) {\n\tconsole.error(error);\n}",
    popularity: 5.9,
    category: "Social",
  },

  {
    id: 7,
    title: "Soundcloud",
    description:
      "Discover, stream, and share a constantly expanding mix of music from emerging and major artists around the world.\n\nhttps://developers.soundcloud.com/\n\nThis is an official API\nOffers SSL Support\nRequest format: JSONP, URI Query String/CRUD, HTTP REST\nResponse format: XML, JSON, JSONP",
    file: {
      url: "//images.ctfassets.net/moq7l799ngye/IPzCpnGVl9q5dYchTkkeK/570c71c23be22dfae0a694121f81b880/soundcloud_api_api.png",
    },
    developer: "Soundcloud",
    usage:
      "const axios = require('axios');\n\nconst options = {\n  method: 'GET',\n  url: 'https://soundcloud4.p.rapidapi.com/search',\n  params: {\n    query: 'almost lover',\n    type: 'all'\n  },\n  headers: {\n    'X-RapidAPI-Key': 'c772e8e859msh0f7037843e00040p13e75bjsn00032879cc2d',\n    'X-RapidAPI-Host': 'soundcloud4.p.rapidapi.com'\n  }\n};\n\ntry {\n\tconst response = await axios.request(options);\n\tconsole.log(response.data);\n} catch (error) {\n\tconsole.error(error);\n}",
    popularity: 9.4,
    category: "Entertainment",
  },

  {
    id: 8,
    title: "Api Meme",
    description: "Create Your Own Meme\n\nhttps://apimeme.com/?ref=apilist.fun",
    file: {
      url: "//images.ctfassets.net/moq7l799ngye/5qrKh64FGwuUaK5X0g67RP/dc6670ba6ea54ba87313a74fe611cfd9/logo.png",
    },
    developer: "Meme Generator API",
    usage:
      "const axios = require('axios');\n\nconst options = {\n  method: 'GET',\n  url: 'https://ronreiter-meme-generator.p.rapidapi.com/meme',\n  params: {\n    meme: 'Condescending-Wonka',\n    bottom: 'Bottom Text',\n    top: 'Top Text',\n    font: 'Impact',\n    font_size: '50'\n  },\n  headers: {\n    'X-RapidAPI-Key': 'c772e8e859msh0f7037843e00040p13e75bjsn00032879cc2d',\n    'X-RapidAPI-Host': 'ronreiter-meme-generator.p.rapidapi.com'\n  }\n};\n\ntry {\n\tconst response = await axios.request(options);\n\tconsole.log(response.data);\n} catch (error) {\n\tconsole.error(error);\n}",
    popularity: 9.3,
    category: "Entertainment",
  },

  {
    id: 9,
    title: "Chuck Norris",
    description:
      "chucknorris.io is a free JSON API for hand curated Chuck Norris facts.",
    file: {
      url: "//images.ctfassets.net/moq7l799ngye/71gSwPPsKQeMoZ5TIl2zi1/8f91dd14994f4f4ee486785fff968ef1/57cfbce9e4b0d07f63b51bcf_medium.png",
    },
    developer: "matchilling",
    usage:
      "const axios = require('axios');\n\nconst options = {\n  method: 'GET',\n  url: 'https://matchilling-chuck-norris-jokes-v1.p.rapidapi.com/jokes/search',\n  params: {\n    query: '<REQUIRED>'\n  },\n  headers: {\n    accept: 'application/json',\n    'X-RapidAPI-Key': 'c772e8e859msh0f7037843e00040p13e75bjsn00032879cc2d',\n    'X-RapidAPI-Host': 'matchilling-chuck-norris-jokes-v1.p.rapidapi.com'\n  }\n};\n\ntry {\n\tconst response = await axios.request(options);\n\tconsole.log(response.data);\n} catch (error) {\n\tconsole.error(error);\n}",
    popularity: 9.8,
    category: "Social",
  },

  {
    id: 10,
    title: "GeoDB Cities",
    description:
      "Get global city, region, and country data. Filter and display results in multiple languages.\n\nGet global city, region, country, and island data. Filter places by name prefix, country, location, time-zone, and even minimum population (currently over 600,000 towns, cities, counties, and islands). Display results in multiple languages. Sort by name, country code, elevation, and population - or any combination of these. Get distances between places. Get all country regions. Get all places in a given region. RESTful API adheres to industry best-practices, including HATEOAS-style links to help page results. Data is periodically refreshed from GeoNames and WikiData. Backed by cloud-based load-balanced infrastructure for resiliency and performance! If you’d like to host the service internally, contact us for details through the dev portal site. Data licensed under Creative Commons, [http://creativecommons.org/licenses/by/3.0](http://creativecommons.org/licenses/by/3.0). For more information check out our website at [http://geodb-cities-api.wirefreethought.com](http://geodb-cities-api.wirefreethought.com)\n",
    file: {
      url: "//images.ctfassets.net/moq7l799ngye/oyJVIKdoSWIkgpVrONGGe/84feb759c451e8c60b180b61b7ef194c/186d1031-a2d8-4710-b518-5180819d9f9e.png",
    },
    developer: "Michael Mogley",
    usage:
      "const axios = require('axios');\n\nconst options = {\n  method: 'GET',\n  url: 'https://wft-geo-db.p.rapidapi.com/v1/geo/adminDivisions',\n  headers: {\n    'X-RapidAPI-Key': 'c772e8e859msh0f7037843e00040p13e75bjsn00032879cc2d',\n    'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'\n  }\n};\n\ntry {\n\tconst response = await axios.request(options);\n\tconsole.log(response.data);\n} catch (error) {\n\tconsole.error(error);\n}",
    popularity: 9.9,
    category: "Data",
  },

  {
    id: 11,
    title: "Language Nuance Detector",
    description:
      "Master the subtleties of language with NuanceNet’s Language Nuance Detector. This innovative tool specializes in detecting and integrating subtle linguistic nuances, a critical component for AI models requiring advanced levels of understanding and interpretation. It’s the key to unlocking a new realm of linguistic intelligence.\n\nAdvanced solution designed to elevate AI’s language comprehension to unprecedented levels. In the intricate world of human language, subtleties can make a significant difference. Our tool is engineered to identify and incorporate these fine linguistic nuances, enabling AI models to understand and interpret language with a depth and accuracy akin to human cognition.\n\nThe Language Nuance Detector is adept at recognizing and processing a range of linguistic subtleties, including implied meanings, emotional tones, and cultural references. This capability is crucial for AI applications in fields like sentiment analysis, natural language understanding, and advanced chatbot development. By equipping AI with the ability to grasp the intricacies of language, our tool opens up possibilities for more nuanced and empathetic interactions.\n\nIdeal for researchers and developers aiming to create sophisticated AI applications, the Language Nuance Detector is a game-changer. Its integration-friendly API and comprehensive linguistic analysis make it an indispensable tool for anyone seeking to push the boundaries of AI’s linguistic capabilities.\n",
    file: {
      url: "//images.ctfassets.net/moq7l799ngye/4oeg51u8aLHEvf1ovmuGJ5/5d2c7836eeafd7a246a14528ee48e089/9f293d91-bb59-43a3-bc3b-62f50f879e0b.png",
    },
    developer: "NuanceNet",
    usage:
      "const axios = require('axios');\n\nconst encodedParams = new URLSearchParams();\nencodedParams.set('data', '<REQUIRED>');\n\nconst options = {\n  method: 'POST',\n  url: 'https://language-nuance-detector.p.rapidapi.com/api/language-nuance-detector',\n  headers: {\n    'content-type': 'application/x-www-form-urlencoded',\n    'X-RapidAPI-Key': 'c772e8e859msh0f7037843e00040p13e75bjsn00032879cc2d',\n    'X-RapidAPI-Host': 'language-nuance-detector.p.rapidapi.com'\n  },\n  data: encodedParams,\n};\n\ntry {\n\tconst response = await axios.request(options);\n\tconsole.log(response.data);\n} catch (error) {\n\tconsole.error(error);\n}",
    popularity: 8.2,
    category: "Data",
  },

  {
    id: 12,
    title: "Dezgo",
    description:
      "🪄 Provides easy&fast access to text2image / image2image / inpainting AI. (57 models across Stable Diffusion 1.x/2.x and finetuned models)",
    file: {
      url: "//images.ctfassets.net/moq7l799ngye/37xgM6NszwGVqzmy2Ikfda/a2d8c6c68c5ef72f0263c487d049bcd2/5a564d2f-bd15-420a-b37f-3fc80f983102.png",
    },
    developer: "dezgo",
    usage:
      "const axios = require('axios');\n\nconst encodedParams = new URLSearchParams();\nencodedParams.set('model', 'epic_diffusion_1_1');\nencodedParams.set('negative_prompt', 'ugly, tiling, poorly drawn hands, poorly drawn feet, poorly drawn face, out of frame, extra limbs, disfigured, deformed, body out of frame, blurry, bad anatomy, blurred, watermark, grainy, signature, cut off, draft');\nencodedParams.set('upscale', '1');\nencodedParams.set('sampler', 'euler_a');\nencodedParams.set('steps', '30');\nencodedParams.set('guidance', '7');\nencodedParams.set('prompt', 'an astronaut riding a horse, digital art, epic lighting, highly-detailed masterpiece trending HQ');\n\nconst options = {\n  method: 'POST',\n  url: 'https://dezgo.p.rapidapi.com/text2image',\n  headers: {\n    'content-type': 'application/x-www-form-urlencoded',\n    'X-RapidAPI-Key': 'c772e8e859msh0f7037843e00040p13e75bjsn00032879cc2d',\n    'X-RapidAPI-Host': 'dezgo.p.rapidapi.com'\n  },\n  data: encodedParams,\n};\n\ntry {\n\tconst response = await axios.request(options);\n\tconsole.log(response.data);\n} catch (error) {\n\tconsole.error(error);\n}",
    popularity: 9.5,
    category: "AI",
  },

  {
    id: 13,
    title: "Spotify Scraper",
    description:
      "An all-in-one scraper for scraping everything on Spotify, and a highly available download solution for tracks, lyrics and episode previews.",
    file: {
      url: "//images.ctfassets.net/moq7l799ngye/7zQCafw9v8Cto52DSAplEZ/edd6666d29850e6a18a260bcb66e287c/c14b1be5-c1ed-4dd3-9e77-0b2ad6cfbc02.png",
    },
    developer: "DataFanatic",
    usage:
      "const axios = require('axios');\n\nconst options = {\n  method: 'GET',\n  url: 'https://spotify-scraper.p.rapidapi.com/v1/track/download/soundcloud',\n  params: {\n    track: 'Photograph Ed Sheeran'\n  },\n  headers: {\n    'X-RapidAPI-Key': 'c772e8e859msh0f7037843e00040p13e75bjsn00032879cc2d',\n    'X-RapidAPI-Host': 'spotify-scraper.p.rapidapi.com'\n  }\n};\n\ntry {\n\tconst response = await axios.request(options);\n\tconsole.log(response.data);\n} catch (error) {\n\tconsole.error(error);\n}",
    popularity: 9.9,
    category: "Music",
  },

  {
    id: 14,
    title: "Movie Database Alternative",
    description:
      "RESTful web service to access information, pictures, and more from the movie database.\n\nGet Title, Year, Metascore Rating, Release date, Runtime, Genre, Directors, Writers, Actors, Plot, Awards, Posters, IMDB ID, Type, DVD, Boxoffice, Production company, website and response data.\n\nGet Title, Year, Metascore Rating, IMDB rating, Release date, Runtime, Genre, Directors, Writers, Actors, Plot, Awards, Posters, IMDB ID, Type, DVD, Boxoffice, Production company, website and response data.",
    file: {
      url: "//images.ctfassets.net/moq7l799ngye/6OsF5sO59fbGJTX4GGaktH/521b8f39fdac1b711cae759373fba311/80601203-b045-4d2a-bc90-a8f64462c9ec_medium.jpg",
    },
    developer: "RapidAPI",
    usage:
      "const axios = require('axios');\n\nconst options = {\n  method: 'GET',\n  url: 'https://movie-database-alternative.p.rapidapi.com/',\n  params: {\n    s: 'Avengers Endgame',\n    r: 'json',\n    page: '1'\n  },\n  headers: {\n    'X-RapidAPI-Key': 'c772e8e859msh0f7037843e00040p13e75bjsn00032879cc2d',\n    'X-RapidAPI-Host': 'movie-database-alternative.p.rapidapi.com'\n  }\n};\n\ntry {\n\tconst response = await axios.request(options);\n\tconsole.log(response.data);\n} catch (error) {\n\tconsole.error(error);\n}",
    popularity: 9.9,
    category: "Entertainment",
  },

  {
    id: 15,
    title: "News API",
    description:
      "https://newsapi.org/\n\nSearch worldwide news with code\nLocate articles and breaking news headlines from news sources and blogs across the web with our JSON API",
    file: {
      url: "//images.ctfassets.net/moq7l799ngye/2jSyWGOIdP0jAIFYOop9ST/bcf03704de52a8d78de0e844df747bc0/News-API-Logo.svg",
    },
    popularity: 4.9,
    category: "Education",
  },

  {
    id: 16,
    title: "AI Color Generator",
    description:
      "Generate colors with the latest advances in AI. Find colors for palettes, gradients, branding, text, and more. Besides suggesting colors, the Hotpot.ai color generator ([https://hotpot.ai/color-generator](https://hotpot.ai/color-generator)) can extract the main colors of an image. Try the free web demo.",
    file: {
      url: "//images.ctfassets.net/moq7l799ngye/5VV4SKEoXavFeObiGaPXNI/64b0ad440defdc71945f3f2f3dc86187/eac9e144-1c2b-4de6-8a88-36be9178f86f.jpg",
    },
    popularity: 8.9,
    category: "AI",
  },

  {
    id: 17,
    title: "Art Institute of Chicago API",
    description:
      "The Art Institute of Chicago's API provides JSON-formatted data as a REST-style service that allows developers to explore and integrate the museum’s public data into their projects. This API is the same tool that powers our website (opens new window), our mobile app (opens new window), and many other technologies in the museum.\n\nIf the application you're building will be public, please send it our way! We'd love to share it alongside some of the other projects that use our API. And if you have any questions, please feel free to reach out to us: engineering@artic.edu.",
    file: {
      url: "//images.ctfassets.net/moq7l799ngye/3RrLJlpstTHBrc1bRt1LTp/2a647a1b666f5cc9097db043b3a29f36/Art_Institute_of_Chicago_Logo.svg",
    },
    developer: "Art Institute of Chicago",
    popularity: 0,
    category: "Data",
  },

  {
    id: "18",
    title: "Weather by API-Ninjas",
    description: "Harness the power of 81 data APIs for your next big idea.",
    file: {
      url: "//images.ctfassets.net/moq7l799ngye/38JZL6jb4vhLApll0k92Z4/d85f3441d572a41ccc36fe3fdce19081/4ec98ee1-9366-4e9d-87c8-e892c61baf41.png",
    },
    developer: "API Ninjas Team",
    popularity: 9.8,
    category: "Weather",
  },

  {
    id: "19",
    title: "{JSON} Placeholder",
    description:
      "Free fake and reliable API for testing and prototyping.\nPowered by JSON Server + LowDB.",
    file: {
      url: "//images.ctfassets.net/moq7l799ngye/6MDygqMYvCley14OLpeUzV/e3760584757adce7993bbf8aacbf9afa/jsonImg.png",
    },
    popularity: 1,
    category: "Data",
  },

  {
    id: "20",
    title: "Microsoft Learn",
    description: "Microsoft's APIs for web development.",
    file: {
      url: "//images.ctfassets.net/moq7l799ngye/6Z3HeRDQsjYWYT74Adtmqz/8ef6f4bad4e1074f2a9a827edc83838e/Microsoft_logo.jpg",
    },
    popularity: 1,
    category: "Education",
  },

  {
    id: "21",
    title: "Emoji API",
    file: {
      url: "//images.ctfassets.net/moq7l799ngye/3D0hCA1mPcrxYqHUIoWqkK/3fd789d880df50c0e170a39460d04e1d/48.png",
    },
    description:
      "Over 1,000+ emojis available which can be referenced using their unicode or name values.\n\nView all emojis: \n\nhttps://emojiapi.dev/emojis",
    popularity: 1,
    category: "Social",
  },

  {
    id: "22",
    title: "HTTP Cats",
    file: {
      url: "https://http.cat/",
    },
    description:
      "An API for the awesome HTTP Cats! Use it in your website to show funny error messages.",
    usage: "https://http.cat/[status_code] Note: If you need an extension at the end of the URL just add .jpg.",
    popularity: 9.9,
    category: "Data",
    developer: "rogeriopvl",

",
  },
];
