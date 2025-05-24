# Notes

## Installation of React-Bootstrap & Bootstrap

```bash
npm install react-bootstrap bootstrap
```
### How to use

- Import Bootstrap’s CSS in your `index.js` or `App.js`:
```jsx
import 'bootstrap/dist/css/bootstrap.min.css';
```
- Use components directly from react-bootstrap:
```jsx
import { Container, Row, Col } from 'react-bootstrap';
```

## React Bootstrap notes

- In **React-Bootstrap**, to control the width of a `Col` within a `Row`, use **breakpoint props** (`xs`, `sm`, `md`, `lg`, `xl`) with values from **1 to 12**.
  - Example: `<Col md={6} />` → occupies 6/12 columns on medium (≥768px) screens and larger.
- Use `Container` to wrap `Row` and `Col`. Use `Container fluid` for full-width layout.
- `Col` without a prop auto-sizes to content: `<Col />`.
- `Col` with prop only: `<Col md />` → auto-width at medium screens.
- Columns stack vertically by default on smaller screens if not specified.

## Breakpoint Reference

| Breakpoint | Size     | Example        |
|------------|----------|----------------|
| `xs`       | ≥ 0px    | `<Col xs={12}>` |
| `sm`       | ≥ 576px  | `<Col sm={6}>`  |
| `md`       | ≥ 768px  | `<Col md={4}>`  |
| `lg`       | ≥ 992px  | `<Col lg={3}>`  |
| `xl`       | ≥ 1200px | `<Col xl={2}>`  |

## Useful resources while learning react-bootstrap

- [Boostrap Documentation](https://getbootstrap.com/docs/5.3/getting-started/introduction/)

- [React Boostrap Documentation](https://react-bootstrap.netlify.app/docs/getting-started/introduction/)