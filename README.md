# 🌀 NgRx Learning Project

This project demonstrates core concepts of **NgRx** in Angular for state management, including `Store`, `Actions`, `Reducers`, `Effects`, and `Selectors`. It's designed to help developers understand and experiment with reactive state patterns.

---

https://ngrx.io/docs

https://ngrx.io/generated/images/guide/store/state-management-lifecycle.png

## 🚀 Technologies

- Angular 19+
- NgRx Store
- NgRx Effects
- NgRx DevTools
- RxJS

---

## 📁 Project Structure

```bash
src/
│
├── app/
│   ├── state/               # NgRx state management folder
│   │   ├── actions/         # Action definitions
│   │   ├── reducers/        # State reducers
│   │   ├── selectors/       # Selectors to extract state
│   │   ├── effects/         # Side effects (API calls, async ops)
│   │   └── models/          # State interfaces
│   │
│   ├── components/          # UI components
│   └── services/            # API and business logic
