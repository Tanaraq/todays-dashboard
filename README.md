# Personal DashBoard

I like to start my day with a cup of coffee, contemplating what today will bring and making a list with the things I want to do that day.
This app was a really nice and usefull practice project for me!

*Note: the app itself is in my native language, Dutch, however all the code is in English*

## Features: 

### Day, date, and ***birthday-notifications***!
In the header you will find the current day and date, followed by a calendar icon. Clicking it will open up a birthday-calendar that you can fill with all your friends & family. If today is actually the birthday of somebody in your calendar, the notification in the header will tell you so! (If not, it says "Today is a beautiful day".)

### Weather-widget
Top left you will find a weather-widget, hooked up to the API of the dutch meteorological institute KNMI, see link in the footer. Clicking the weather-icon will unfold a short forecast for today/tomorrow

### Taskboard
The main section is my taskboard with several tabs: every tab is a category with it's own color and icon. A task that is assigned to a category will also show that same color and icon. Tasks can be made ***recurring***: ideal for training programs, household-chores, keeping track of habits or simply not forgetting to water your plants. 
Every tasks has buttons to complete the tasks, remove it, or click the heart-button to add it to the do-Today-list.

The first tab of the taskboard is called ***"Today": every task that is recurring today will show up here!***
Btw, if you decide not to do the task today, you can remove it from "Today" by clicking its heart-button again. However! if it is a task that is recurring today, it will pop straight back up until you finish it! At first glance I thought of this as an error.... but I decided to keep it like this: sometimes it's kinda ok to not be able to get rid of a task too easily.

### Quote-of-the-Day
At the bottom you will find a quote about life: it is a daily random quote brought to you by the API of https://theysaidso.com .

## Techniques used:
React-Redux, Redux-Toolkit, Redux-persist




