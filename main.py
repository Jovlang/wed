#!/usr/bin/env python

from bottle import *

@get('/static/<path:path>')
def static(path):
    return static_file(path, root='static/')

@get('/')
def f():
    return template('index.tpl')

run(host='localhost', port=8000)
