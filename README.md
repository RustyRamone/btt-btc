# Breezin' Thru Theory: Composer's Corner

The Composer's Corner project is a series of music theory and composition
tutorials intended to be run in a user's web browser. The goal is to achieve a
fairly rich, interactive user interface while still retaining support for a
wide range of platforms and devices. We believe that **HTML5** occupies the
sweet spot in terms of trade-offs between features and support.

##Architecture (high level)
The initial revision of the Composer's Corner project will need to integrate
into an existing **WordPress** application. We feel that **WordPress** is not a
suitable long-term solution for an application platform since it lacks many of
the features of a more robust application framework (i.e. sign-up, password
retrieval, e-commerce, etc.). It is hoped that Osaaru will be commissioned to
modernize the entire application at some point in the future, so we want to
approach the current project with that goal in mind.

###Layout/Navigation: phnq_widgets
While **phnq_widgets** (https://github.com/pgostovic/phnq\_widgets) is a
server-side framework for disseminating rich, dynamic applications, it can also
be used to generate a static client-side JavaScript-based application. It
provides an intuitive application structure and eases basic tasks such as
developing layout and navigation.

###Music Notation: VexFlow
Some basic music notation will be required. The VexFlow (http://www.vexflow.com)
JavaScript API produces beautiful music notation. It renders using either SVG or
Canvas, so it will work on HTML5-compliant clients.

###Audio Triggering: HTML5 audio
It will be necessary to be able to play students' compositions. Unfortunately,
iOS does not support MIDI playback natively, nor does HTML5, so MIDI.js
(http://mudcu.be/midi-js/) will not be used. However, since the music playback
requirements are fairly simple, it should be fairly straightforward to trigger
audio samples with basic HTML5 audio, or some JavaScript wrapping API.

### Prerequisites
* Node.js (http://nodejs.org)
* make (possibly needed by a dependency)

### Build
Fetch the project dependencies:

	npm install

Run unit tests:

	npm test

To generate the static site and open it in a broswer:

	npm start
