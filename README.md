# Count Collab

Count Collab provides shared counts that everyone can use.

## Feature Planning / Roadmap
- Requirements tagged with `<mvp>` must be there in the inital implementation
- Requirements tagged with `<v1>`, `<v2>`, `<v3>` is planned for upcoming versions

### `<mvp>`
- Create counters
- Public counters shown on dashboard
- "Private" counters shareable via direct link
- No Login
- Landingpage
- Live update of counters

### `<v1>`
- Counter Browser

### `<v2>`
- Login

### `<v3>`
- Discord integration

### `<v4>`
- Milestones

## Concept / Ideas
### Concept of Counters

#### Counter
- `<mvp>` has a title
- `<mvp>` description
- `<mvp>` count always starts at zero
- `<mvp>` history of the count is kept, for future analytics / graphs to be shown
- `<mvp>` counters can be increased or decresed always one at a time (+1 / -1)
- `<mvp>` counter are directly accessibile via path `/c/{uuid}`
- `<v1>` configurable if counters can be increased, decreased, or both
- `<v4>` can have configured milestones e.g. 100, 1000, 1000000 - that's up to the user

#### Private vs Public
##### Public Counter
- Everyone can see public counters and increase the count created by users
- Limitations:
    - not logged in user: can increase the count but only every minute
    - logged in user: can increase the count every second

##### Private/shared Counter
- are unlisted, not logged in users
- User based
- Must be logged in
- Can be shared with other users

### Actions
#### Counters
- `<mvp>` can only be increased

### Pages
##### Landingpage
- `<mvp>` Shows most popular counters
- `<v1>` Logged in users: Can pin counters within the "Counter Browser" which are shown on the dashboard
- `<v1>` Logged in users: Shows private/shared counters

##### Counter Browser
- Search functionality
- Popularity sorting, hottest counter first (trending by click frequency + total count)


## Docs
[Development Guidelines](/DEVELOPMENT.md)

