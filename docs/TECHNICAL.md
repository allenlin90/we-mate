- [1. Technical Design](#1-technical-design)
  - [1.1. Features](#11-features)
    - [1.1.1. Find room(s)](#111-find-rooms)
    - [1.1.2. Roommate interactions](#112-roommate-interactions)
  - [1.2. Models](#12-models)
    - [1.2.1. User](#121-user)
      - [1.2.1.1. Roles](#1211-roles)
    - [1.2.2. Rooms](#122-rooms)
    - [1.2.3. Reviews](#123-reviews)
  - [1.3. TODOs](#13-todos)
    - [1.3.1. Frontend](#131-frontend)
      - [1.3.1.1. Context and state controls](#1311-context-and-state-controls)
      - [1.3.1.2. Components](#1312-components)
      - [1.3.1.3. App dressing](#1313-app-dressing)
      - [1.3.1.4. PWA features](#1314-pwa-features)
      - [1.3.1.5. Optimization](#1315-optimization)
      - [1.3.1.6. Maintenance](#1316-maintenance)
- [2. Research feature on native app](#2-research-feature-on-native-app)
    - [2.0.1. Indoor location](#201-indoor-location)
    - [2.0.2. Integration with Web3](#202-integration-with-web3)
    - [2.0.3. Integration with AI](#203-integration-with-ai)

---

# 1. Technical Design 

## 1.1. Features
### 1.1.1. Find room(s)
- Users can search for locations where they can hangout. 
- Get a list of shops/places 
  - Near to the user
  - By user's interests on 
    - Shop/location name
    - Popularity
    - Genre of locations
    - Keywords and tags

### 1.1.2. Roommate interactions
- Users in the same room can invite for interaction.

## 1.2. Models
### 1.2.1. User
#### 1.2.1.1. Roles
- `Roommate` - People want to interact and have fun.
  - Anonymous
  - Authenticated
- `Room master` - The shop owner who manage the location.

### 1.2.2. Rooms 
- People at the same shop/location join to the same `Room` to interact.
- This is similar to a chat room or channel to group people together.
- Roommates should be `geo-fenced` similar to **QueQ**.

### 1.2.3. Reviews
- Polymorphic to be used by `User` and `Room`. 

## 1.3. TODOs
### 1.3.1. Frontend
#### 1.3.1.1. Context and state controls
- [x] i18n
- [ ] Feature flags

#### 1.3.1.2. Components
- [x] Modal
- [ ] Toast
- [ ] Header/Footer navigation
- [ ] Skeleton loader

#### 1.3.1.3. App dressing
- [x] Error boundary
- [ ] Error handling design
- [ ] Page transition animation
- [ ] Micro animation and component transition

#### 1.3.1.4. PWA features
- [x] Download and install
- [x] Offline access
- [ ] Push notification

#### 1.3.1.5. Optimization
- [ ] Dynamic loading

#### 1.3.1.6. Maintenance
- [ ] User activities logging
- [ ] `huksy` for git commit pattern
- [ ] Unit test

--- 

# 2. Research feature on native app
### 2.0.1. Indoor location
- by `Bluetooth`, `Gyroscope`, `Beacon`, `NFC`, `LAN` (local area network)
- Locating tables and users at a place
- Preventing people access from remote locations

### 2.0.2. Integration with Web3

### 2.0.3. Integration with AI