Find your country. Buy Bitcoin.

# Translations

# How Can You Help? 

* **Translate exchange/company data to other languages.**

   Find an exchange or company in [buy.yml][buy]. Get the two charachter code for your selected language. Add two new items to the list for the exchange or company you're translating: `name_(country_code):` (name of exchange/company) in selected language) and `desc_(country_code):` (brief description of exchange/company in selected language).  


* **Add new Bitcoin exchanges, brokers, and companies.**

   Add a new Bitcoin exchange or company in [buy.yml][buy].  
   
   ```
   name: (name of exchange or company)
   desc: (brief description of company/exchange)
   url: (company/exchange website)
   icon: (company/exchange icon)
   countries: (country codes)
   po: (payment methods)
   ```
   To add exchanges in other languages use `name_(country_code):` instead of `name:` and `desc_(country_code):` instead of `desc:`; `url:`, `icon:`, `countries:`, and `po:` can stay the same for all languages. To find a country code go to [countries.yml][countries] and the two charachters after `short:` are the country code. 

[countries]: https://github.com/BuyBitcoinWorldwide/buybitcoinworldwide.github.io/blob/master/_data/countries.yml
[buy]: https://github.com/BuyBitcoinWorldwide/buybitcoinworldwide.github.io/blob/master/_data/buy.yml