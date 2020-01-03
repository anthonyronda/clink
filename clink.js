var storyContent = ﻿{"inkVersion":19,"root":[[{"#":"title:Clink"},{"#":"author:corporat"},{"#":"theme:dark"},{"#":"checkothertabs:clink"},"^A simple puzzle game.",{"#":"openchannel:strangers"},{"#":"openchannel:clink"},"\n","ev","str","^Continue","/str","/ev",{"*":"0.c-0","flg":20},{"c-0":["\n","ev",{"x()":"getNumTabs"},"/ev",{"VAR=":"numTabs","re":true},"\n","ev",{"VAR?":"numTabs"},0,">","/ev",[{"->":".^.b","c":true},{"b":[{"->":"bargein"},{"->":"0.c-0.13"},null]}],[{"->":".^.b"},{"b":[{"->":"0.waiting"},{"->":"0.c-0.13"},null]}],"nop","\n",{"->":"0.waiting"},{"#f":5}],"waiting":[["ev","visit",5,"MIN","/ev","ev","du",0,"==","/ev",{"->":".^.s0","c":true},"ev","du",1,"==","/ev",{"->":".^.s1","c":true},"ev","du",2,"==","/ev",{"->":".^.s2","c":true},"ev","du",3,"==","/ev",{"->":".^.s3","c":true},"ev","du",4,"==","/ev",{"->":".^.s4","c":true},"ev","du",5,"==","/ev",{"->":".^.s5","c":true},"nop",{"s0":["pop","^At the tavern, the barmaid seems disinterested in serving. Our company tries our darnedest to call for her, but she looks out the window and pretends not to hear our pleas for attention.",{"->":".^.^.41"},null],"s1":["pop","^A pained shout in an empty tavern doesn't draw the faintest eye. The lengths she goes to avoid us!",{"->":".^.^.41"},null],"s2":["pop","^The barmaid continues to find our lot the least interesting things in the room, sweeping the floor and moving to inspecting the door, presumably for termites.",{"->":".^.^.41"},null],"s3":["pop","^Perhaps she's ascertained our...financial difficulty?",{"->":".^.^.41"},null],"s4":["pop","^She's no use. Perhaps the innkeeper? You swivel your head but you were already sure there's no one else who can help us.",{"->":".^.^.41"},null],"s5":["pop","^We're out of choices, we have to hope someone else joins the room to spring her to service.",{"->":".^.^.41"},null],"#f":5}],"\n","ev","str","^strangers","/str",{"VAR?":"strangers"},"str","^pop","/str",{"x()":"getMessage","exArgs":3},"/ev",{"VAR=":"strangers","re":true},"\n","ev","str",["ev","visit",5,"MIN","/ev","ev","du",0,"==","/ev",{"->":".^.s0","c":true},"ev","du",1,"==","/ev",{"->":".^.s1","c":true},"ev","du",2,"==","/ev",{"->":".^.s2","c":true},"ev","du",3,"==","/ev",{"->":".^.s3","c":true},"ev","du",4,"==","/ev",{"->":".^.s4","c":true},"ev","du",5,"==","/ev",{"->":".^.s5","c":true},"nop",{"s0":["pop","^Holler",{"->":".^.^.41"},null],"s1":["pop","^Seated stomp",{"->":".^.^.41"},null],"s2":["pop","^Pound the table",{"->":".^.^.41"},null],"s3":["pop","^Wipe a little soot off",{"->":".^.^.41"},null],"s4":["pop","^Pout",{"->":".^.^.41"},null],"s5":["pop","^Wait",{"->":".^.^.41"},null],"#f":5}],"/str",{"VAR?":"strangers"},"!","/ev",{"*":".^.c-1","flg":5},"ev","str","^What was that noise?","/str",{"VAR?":"strangers"},"/ev",{"*":".^.c-2","flg":21},{"c-1":["^ ",{"->":".^.^"},"\n",{"->":"0.maiden"},{"#f":5}],"c-2":["^ You contort at the waist just in time to face a ruinous lot nearly tearing the door off its hinge! One of them, the leader, sputters \"Retsina.\" ","\n","^I'm a little sick. Without swatting away his untamed, facially-obstrusive coiffure, he turns our way. He smiles. \"We got them.\"","\n","^The miss follows his gaze. By Gods, we finally register on her vision!","\n",{"->":"0.maiden"},{"#f":5}],"#f":5}],"maiden":["<>","^ The maiden, jolted into service by the sudden bustle, walks over with a round of wine for our party, and the other table too. ",{"#":"closechannel:strangers"},"\n","ev","str","^Raise your glass in a toast","/str","/ev",{"*":".^.c-3","flg":20},"ev","str","^To your lips, somberly","/str","/ev",{"*":".^.c-4","flg":20},{"c-3":["^ Clink! To health!",{"#":"clink:a clink and hearty cheers"},"\n",{"->":"0.g-0"},{"#f":5}],"c-4":["^ Your company blinks at you.",{"#":"clink:slience"},"\n",{"->":"0.g-0"},{"#f":5}],"#f":5}],"g-0":["^At the next table over, there was ","ev","str","^clink","/str","str","^quivering anticipation","/str","str","^pop","/str",{"x()":"getMessage","exArgs":3},"out","/ev","^.",{"#":"closechannel:clink"},"\n","ev",{"VAR?":"numTabs"},0,"==","/ev",[{"->":".^.b","c":true},{"b":["^They have us.",{"->":"0.g-0.23"},null]}],"nop","\n","end",["done",{"#f":5,"#n":"g-1"}],{"#f":5}]}],"done",{"bargein":[["^You and your party make quite a show of arriving to the sleepy village. People are staring.","\n","^Not minding that, you make haste for the nearest tavern. It doesn't take long to figure out which building, despite its lack of adornment, as there's only one in this sorry shantytown suited to be more than a beggar's hovel.","\n","ev","str","^Barge in","/str","/ev",{"*":".^.c-0","flg":20},"ev","str","^Make your order","/str","/ev",{"*":".^.c-1","flg":20},"ev","str","^Case it for vermin","/str","/ev",{"*":".^.c-2","flg":20},{"c-0":["^ You barge in to find a few more unwashed faces. The housemistress froze in place.",{"#":"strangers:1"},"\n",{"->":".^.^.g-0"},{"#f":5}],"c-1":["^ \"Retsina.\" I can't help myself.","\n",{"->":".^.^.g-0"},{"#f":5}],"c-2":["^ The stench is unmistakable. \"Retsina.\"","\n",{"->":".^.^.g-0"},{"#f":5}],"g-0":["ev","str","^Smile","/str","/ev",{"*":".^.c-3","flg":20},"ev","str","^Turn your head","/str","/ev",{"*":".^.c-4","flg":20},{"c-3":["^ You hear a chuckle among your cohort surrounding you. \"We got them.\"","\n",{"->":".^.^.^.g-1"},{"#f":5}],"c-4":["^ \"We got them.\" Through it all, I didn't expect the hunt to end before breakfast.","\n",{"->":".^.^.^.g-1"},{"#f":5}],"#f":5}],"g-1":["ev","str","^Sit down","/str","/ev",{"*":".^.c-5","flg":20},{"c-5":["^ We sit.",{"->":"0.maiden"},"\n",{"#f":5}],"#f":5}]}],{"#f":1}],"getMessage":[{"temp=":"op"},{"temp=":"fallback"},{"temp=":"channelName"},"ev",{"VAR?":"fallback"},"/ev","~ret",{"#f":1}],"getNumTabs":["ev",0,"/ev","~ret",{"#f":1}],"global decl":["ev",0,{"VAR=":"numTabs"},0,{"VAR=":"strangers"},"/ev","end",null],"#f":1}],"listDefs":{}};