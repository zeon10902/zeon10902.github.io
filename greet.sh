#!/bin/sh

# This is a simple shell script to test ShellCheck in GitHub Actions

# Define a function to greet the user
greet_user() {
  echo "Hello, $1!"
}

greet_user "Jim"

echo "The value of an undefined variable is: $x"

