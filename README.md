# Logo Design
[https://looka.com/s/181520077](https://looka.com/s/181520077)

[Business concerns](docs/BUSINESS.md)

---

# Technical Design 

## Features

## Models
### User
#### Roles
- `Joiner` - People want to interact and have fun. 
- `Room master` - The shop owner who manage the location.

#### Rooms 
- People at the same shop/location join to the same `Room` to interact.
- This is similar to a chat room or channel to group people together.
- Room joiners should be `geo-fenced` similar to **QueQ**.

#### Reviews
- Polymorphic to be used by `User` and `Room`. 

### TODOs
### Frontend
#### Context and state controls
- [x] i18n
- [ ] Feature flags

#### Components
- [ ] Modal
- [ ] Toast
- [ ] Header/Footer navigation

#### App dressing
- [x] Error boundary
- [ ] Error handling design
- [ ] Page transition animation
- [ ] Micro animation and component transition

#### PWA features
- [ ] Download and install
- [ ] Push notification
- [ ] Offline access?

#### Optimization
- [ ] Dynamic loading

#### Maintenance
- [ ] User activities logging
- [ ] `huksy` for git commit pattern

--- 

# Research feature on native app
### Indoor location
- by `Bluetooth`, `Gyroscope`, `Beacon`, `NFC`, `LAN` (local area network)
- Locating tables and users at a place
- Preventing people access from remote locations

### Integration with Web3

### Integration with AI
