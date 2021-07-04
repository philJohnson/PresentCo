## The Challenge

Build an app that can display a list of countries with the capability of filtering results through a search mechanism, paginating countries and showing information about each individual country.

Use the [RESTCountries endpoint](https://restcountries.eu/rest/v2/all) to get the list of all countries.

## Requirements

- Create a web application using React consisting of two pages, as described in the sections below.
- Write your own pagination logic
- Write your own search logic, no need for super advanced search logic
- You are free to use a UI library such as Material-UI

### Countries page

```
Scenario 1: Countries loading
Given I am on the countries page
When the countries haven't finished loading
Then I should see a loading spinner

Scenario 2: Countries loaded
Given I am on the countries page
When the countries have finished loading
Then I should see the first 10 countries in alphabetical order
  And display their country name

Scenario 3: Search
Given I have entered text in the search input
When I click the search button
Then I should update the countries list to only show countries which contain the search text

Scenario 4: Hide next page button
Given there are no more countries on the next page
When the countries list has updated
Then hide the button to paginate to the next page

Scenario 5: Hide previous page button
Given there are no more countries on the previous page
When the countries list has updated
Then hide the button to paginate to the previous page

Scenario 6: Clicking the next page button
Given the next page button is visible
When I click on the next page button
Then I should see the next 10 countries in alphabetical order

Scenario 7: Clicking the previous page button
Given the previous page button is visible
When I click on the previous page button
Then I should see the previous 10 countries in alphabetical order

Scenario 8: Clicking a country
Given the countries list has loaded
When I click a country
Then take me to that country's page
```

### Country page

```
Scenario 1: Country loading
Given I am on the country page
When the country hasn't finished loading
Then I should see a loading spinner

Scenario 2: Country loaded
Given I am on the country page
When the country has finished loading
Then I should see the country's flag
  And the country's name
  And the country's population
  And the country's demonym
```
## Result

Typically I would have built this as a react app and used ContextAPI along with perhaps a UI library such as AntD or Theme UI. Given Present Co are looking to use Recoil, ReactQuery and NextJS I thought I'd try these out. I've also used Material UI as it's mentioned in this ReadMe.

This is the first time using Recoil, ReactQuery, NextJS and Material-ui. I've not focued on design as heavily however I've tried to focus on UX.

I've used NextJS SSR for the API call. I'm aware that this may not be ideal for all scenarios however given that the scope of this request I made the assumption that it would be fine. Removing the request from SSR is simple enough to do.

### Countries page

Countries are already in alphabetical order however if needed to change the base order I'd do that within the ReactQuery call.
```
Scenario 3
I've opted to seach only by name as a simple solution. Ideally I'd use a search library which would allow a more complex search solution.
```
```
Secnario 4 & 5
Instead of hiding previous and next buttons I've opted to disable them. I'm not a fan of hiding consitent UI elements.
```

### Country Page
```
Scenario 1
There shouldn't be a loading spinner if coming from the counties page as the countries are stored in state. If you reload the page then it will have a loading state.
```

```
Scenario 2
I've opted to also include a google map with a pin to the country.
```
