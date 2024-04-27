- [1. Logo Design](#1-logo-design)
- [2. Technical Design](#2-technical-design)
  - [2.1. Features](#21-features)
    - [2.1.1. Find room(s)](#211-find-rooms)
    - [2.1.2. Roommate interactions](#212-roommate-interactions)
  - [2.2. Models](#22-models)
    - [2.2.1. User](#221-user)
      - [2.2.1.1. Roles](#2211-roles)
    - [2.2.2. Rooms](#222-rooms)
    - [2.2.3. Reviews](#223-reviews)
  - [2.3. TODOs](#23-todos)
    - [2.3.1. Frontend](#231-frontend)
      - [2.3.1.1. Context and state controls](#2311-context-and-state-controls)
      - [2.3.1.2. Components](#2312-components)
      - [2.3.1.3. App dressing](#2313-app-dressing)
      - [2.3.1.4. PWA features](#2314-pwa-features)
      - [2.3.1.5. Optimization](#2315-optimization)
      - [2.3.1.6. Maintenance](#2316-maintenance)
- [3. Research feature on native app](#3-research-feature-on-native-app)
    - [3.0.1. Indoor location](#301-indoor-location)
    - [3.0.2. Integration with Web3](#302-integration-with-web3)
    - [3.0.3. Integration with AI](#303-integration-with-ai)

---
# 1. Logo Design
[https://looka.com/s/181520077](https://looka.com/s/181520077)

<img src="public/logo.png" alt="logo">

[Business concerns](docs/BUSINESS.md)

---

# 2. Technical Design 

## 2.1. Features
### 2.1.1. Find room(s)
- Users can search for locations where they can hangout. 
- Get a list of shops/places 
  - Near to the user
  - By user's interests on 
    - Shop/location name
    - Popularity
    - Genre of locations
    - Keywords and tags

### 2.1.2. Roommate interactions
- Users in the same room can invite for interaction.

## 2.2. Models
### 2.2.1. User
#### 2.2.1.1. Roles
- `Roommate` - People want to interact and have fun.
  - Anonymous
  - Authenticated
- `Room master` - The shop owner who manage the location.

### 2.2.2. Rooms 
- People at the same shop/location join to the same `Room` to interact.
- This is similar to a chat room or channel to group people together.
- Roommates should be `geo-fenced` similar to **QueQ**.

### 2.2.3. Reviews
- Polymorphic to be used by `User` and `Room`. 

## 2.3. TODOs
### 2.3.1. Frontend
#### 2.3.1.1. Context and state controls
- [x] i18n
- [ ] Feature flags

#### 2.3.1.2. Components
- [ ] Modal
- [ ] Toast
- [ ] Header/Footer navigation
- [ ] Skeleton loader

#### 2.3.1.3. App dressing
- [x] Error boundary
- [ ] Error handling design
- [ ] Page transition animation
- [ ] Micro animation and component transition

#### 2.3.1.4. PWA features
- [x] Download and install
- [x] Offline access
- [ ] Push notification

#### 2.3.1.5. Optimization
- [ ] Dynamic loading

#### 2.3.1.6. Maintenance
- [ ] User activities logging
- [ ] `huksy` for git commit pattern

--- 

# 3. Research feature on native app
### 3.0.1. Indoor location
- by `Bluetooth`, `Gyroscope`, `Beacon`, `NFC`, `LAN` (local area network)
- Locating tables and users at a place
- Preventing people access from remote locations

### 3.0.2. Integration with Web3

### 3.0.3. Integration with AI
