# `noDidUpdateSetState.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test packages/@romejs/js-compiler/lint/rules/react/noDidUpdateSetState.test.ts --update-snapshots` to update.

## `no this.setState in componentDidUpdate`

### `0`

```

 unknown:4:12 lint/noDidUpdateSetState ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ✖ Avoid this.setState in componentDidUpdate

    2 │         class Hello extends React.Component {
    3 │           componentDidUpdate() {
  > 4 │             this.setState({
      │             ^^^^^^^^^^^^^
    5 │               name: 'John'
    6 │             });

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✖ Found 1 problem

```

### `0: formatted`

```
class Hello extends React.Component {
	componentDidUpdate() {
		this.setState({
			name: "John",
		});
	}
}

```

### `1`

```

 unknown:5:12 lint/noDidUpdateSetState ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ✖ Avoid this.setState in componentDidUpdate

    3 │           componentDidUpdate() {
    4 │             foo();
  > 5 │             this.setState({
      │             ^^^^^^^^^^^^^
    6 │               name: 'John'
    7 │             });

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✖ Found 1 problem

```

### `1: formatted`

```
class Hello extends React.Component {
	componentDidUpdate() {
		foo();
		this.setState({
			name: "John",
		});
	}
}

```

### `2`

```

 unknown:4:12 lint/noDidUpdateSetState ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ✖ Avoid this.setState in componentDidUpdate

    2 │         class Hello extends Component {
    3 │           componentDidUpdate() {
  > 4 │             this.setState({
      │             ^^^^^^^^^^^^^
    5 │               name: 'John'
    6 │             });

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✖ Found 1 problem

```

### `2: formatted`

```
class Hello extends Component {
	componentDidUpdate() {
		this.setState({
			name: "John",
		});
	}
}

```

### `3`

```

 unknown:5:12 lint/noDidUpdateSetState ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ✖ Avoid this.setState in componentDidUpdate

    3 │           componentDidUpdate() {
    4 │             foo();
  > 5 │             this.setState({
      │             ^^^^^^^^^^^^^
    6 │               name: 'John'
    7 │             });

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✖ Found 1 problem

```

### `3: formatted`

```
class Hello extends Component {
	componentDidUpdate() {
		foo();
		this.setState({
			name: "John",
		});
	}
}

```

### `4`

```
✔ No known problems!

```

### `4: formatted`

```
class Hello extends React.Component {
	componentDidUpdate() {
		if (condition) {
			this.setState({
				name: "John",
			});
		}
	}
}

```
