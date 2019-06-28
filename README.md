# Icon-Concerts

## ENV VARIABLE

```sh
create a .env file at the root of project
REACT_APP_API_KEY=yourKey
In your JS files use process.env.REACT_APP_API_KEY
```

## Description

a web application where users can search and purchase tickets for comedy events.

### A user should be able to

- search for events
- view more information about a comedian or event
- save upcoming events of interest
- receive notifications if an artist is in town: add to calendar
- map events
- Genre
- keywords
- artist, artistName, location, date

Rendering results to page:

> Artist/Event Image
> Artist/Event Name
> Venue, City, State
> Date, Time
> Buy Tickets (link)
> Learn More
> 'On sale now!'

Other Ideas:

> 'Box Office Info'
> 'Accessibility Info'

> Accessing JSON:
> events.name
> events.id
> events.url (take to ticket master site to buy tickets and view seat map)
> events.images[#]
> events.dates.start.dateTime
> events.accessibility
> events.\_embedded.venues[0].name
> events.dates.status.code
