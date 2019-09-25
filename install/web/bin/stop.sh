#!/bin/sh

PID=/home/ubuntu/javaServer/pid

if [ ! -z "$PID" ]; then
  if [ -f "$PID" ]; then
    if [ -s "$PID" ]; then
      kill -0 `cat "$PID"` >/dev/null 2>&1
      if [ $? -gt 0 ]; then
        echo "PID file found but no matching process was found. Stop aborted."
        exit 1
      fi
    else
      echo "PID file is empty and has been ignored."
    fi
  else
    echo "\$PID was set but the specified file does not exist. Is Java server running? Stop aborted."
    exit 1
  fi
fi
kill -15 `cat $PID`
