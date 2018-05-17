Lab 03 - Asynchronous Callbacks
===============================
*Reader Module*

[![Build Status](https://travis-ci.com/justeban/03-asynchronous-callbacks.svg?branch=lab-justin)](https://travis-ci.com/justeban/03-asynchronous-callbacks)

## Overview

This is a module that uses ```File System (fs)``` in order to read a file and return its contents.

## Features

This Reader Module exports a function that takes in two parameters ```(path, callback)```. Path can be a single file path or it can be an Array of file paths. If any paths are invalid, by istelf or found in an array, the module returns an error. Given a valid path, Reader will return a string that contains the contents of the file. If given an array of paths, Reader will return an array of strings that contain each individual file. 

This module was built node and tested using ```jest``` and creating mocks. It was tested vis Travis.
