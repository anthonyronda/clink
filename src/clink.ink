# title:Clink
# author:corporat
# theme:dark
# checkothertabs:clink

EXTERNAL getMessage(channelName,fallback, op)
EXTERNAL getNumberOfOpen(gameName)

CONST DEBUG = 0

A simple puzzle game.#openchannel:strangers #openchannel:clink

VAR numTabs = 0

* [Continue]

~ numTabs = getNumberOfOpen("Clink")

{numTabs>0:->bargein|->waiting}

VAR strangers = 0

- (waiting) {At the tavern, the barmaid seems disinterested in serving. We try our darnedest to call for her, but she looks out the window and pretends not to hear our pleas for attention.|A pained shout in an empty tavern doesn't draw the faintest eye. The lengths she goes to avoid us!|The barmaid continues to find our lot the least interesting things in the room, sweeping the floor and moving to inspect the door, presumably for termites.|Perhaps she's ascertained our...financial difficulty?|She's no use. Perhaps the innkeeper? You swivel your head but you were already sure there's no one else who can help us.|We're out of choices, we have to hope someone else joins the room to spring her to service.}

~ strangers = getMessage("strangers",strangers,"pop")

+ {DEBUG or not strangers} [{Holler|Seated stomp|Pound the table|Wipe a little soot off|Pout|Wait}] ->waiting

* {DEBUG or strangers} [What was that noise?] You contort at the waist just in time to face a ruinous lot nearly tearing the door off its hinge! One of them, the leader, sputters "Retsina." 

    You've gone pale.
    
    Without swatting away his untamed, facially-obstrusive coiffure, he turns our way. He smiles. "We got them."
    
    The miss follows his gaze. By Gods, we finally register on her vision!

- (maiden)<> The maiden jolts into service and quickly raises an amphora to a row of cups. She walks over with rounds of wine for our party, and the other gentlemen too. #closechannel:strangers

* [Raise your glass in a toast] Clink! To health!#clink:a clink and hearty cheers
* [To your lips, somberly] Your company blinks at you.#clink:slience

- At the next table over, there was {getMessage("clink","quivering anticipation","pop")}.#closechannel:clink

{numTabs==0:They have us.}

->END

= bargein

Our party make quite a show of arriving to the sleepy village. People are staring.

Not minding that, you make haste for the tavern, and the rest amble behind. It doesn't take long to figure out which building it was, despite a lack of adornment, as there's only one spot in this sorry shantytown suited for more than as a beggar's hovel.

* [Barge in] You barge in to find a few more unwashed faces. The housemistress freezes in place.#strangers:1

-

* [Make your order] "Retsina." I can't help myself.
* [Case it for vermin] The stench is unmistakable. "Retsina."
-
* [Smile] Your lips part as you hear a chuckle among your cohort surrounding you. "We got them."
* [Turn your head] You turn to face four oily welshers. "We got them." Through it all, I didn't expect the hunt to end before breakfast.
-
* [Sit down] We sit.->maiden

== function getMessage(channelName, fallback, op) ==
~ return fallback

== function getNumberOfOpen(channelName) ==
~ return DEBUG or 0