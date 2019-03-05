Although this book primarily focuses on networks, many of the topics are also important
in distributed systems. For more information about distributed systems,
see Tanenbaum and Van Steen (2007).
1.1 USES OF COMPUTER NETWORKS
Before we start to examine the technical issues in detail, it is worth devoting
some time to pointing out why people are interested in computer networks and
what they can be used for. After all, if nobody were interested in computer networks,
few of them would be built. We will start with traditional uses at companies,
then move on to home networking and recent developments regarding
mobile users, and finish with social issues.
1.1.1 Business Applications
Most companies have a substantial number of computers. For example, a
company may have a computer for each worker and use them to design products,
write brochures, and do the payroll. Initially, some of these computers may have
worked in isolation from the others, but at some point, management may have
decided to connect them to be able to distribute information throughout the company.
Put in slightly more general form, the issue here is resource sharing. The
goal is to make all programs, equipment, and especially data available to anyone
on the network without regard to the physical location of the resource or the user.
An obvious and widespread example is having a group of office workers share a
common printer. None of the individuals really needs a private printer, and a
high-volume networked printer is often cheaper, faster, and easier to maintain
than a large collection of individual printers.
However, probably even more important than sharing physical resources such
as printers, and tape backup systems, is sharing information. Companies small
and large are vitally dependent on computerized information. Most companies
have customer records, product information, inventories, financial statements, tax
information, and much more online. If all of its computers suddenly went down, a
bank could not last more than five minutes. A modern manufacturing plant, with
a computer-controlled assembly line, would not last even 5 seconds. Even a small
travel agency or three-person law firm is now highly dependent on computer networks
for allowing employees to access relevant information and documents
instantly.
For smaller companies, all the computers are likely to be in a single office or
perhaps a single building, but for larger ones, the computers and employees may
be scattered over dozens of offices and plants in many countries. Nevertheless, a
sales person in New York might sometimes need access to a product inventory
Peer-to-peer communication is often used to share music and videos. It really
hit the big time around 2000 with a music sharing service called Napster that was
shut down after what was probably the biggest copyright infringement case in all
of recorded history (Lam and Tan, 2001; and Macedonia, 2000). Legal applications
for peer-to-peer communication also exist. These include fans sharing public
domain music, families sharing photos and movies, and users downloading
public software packages. In fact, one of the most popular Internet applications
of all, email, is inherently peer-to-peer. This form of communication is likely to
grow considerably in the future.
All of the above applications involve interactions between a person and a remote
database full of information. The second broad category of network use is
person-to-person communication, basically the 21st century’s answer to the 19th
century’s telephone. E-mail is already used on a daily basis by millions of people
all over the world and its use is growing rapidly. It already routinely contains
audio and video as well as text and pictures. Smell may take a while.
Any teenager worth his or her salt is addicted to instant messaging. This
facility, derived from the UNIX talk program in use since around 1970, allows two
people to type messages at each other in real time. There are multi-person messaging
services too, such as the Twitter service that lets people send short text
messages called ‘‘tweets’’ to their circle of friends or other willing audiences.
The Internet can be used by applications to carry audio (e.g., Internet radio
stations) and video (e.g., YouTube). Besides being a cheap way to call to distant
friends, these applications can provide rich experiences such as telelearning,
meaning attending 8 A.M. classes without the inconvenience of having to get out
of bed first. In the long run, the use of networks to enhance human-to-human
communication may prove more important than any of the others. It may become
hugely important to people who are geographically challenged, giving them the
same access to services as people living in the middle of a big city.
Between person-to-person communications and accessing information are
social network applications. Here, the flow of information is driven by the relationships
that people declare between each other. One of the most popular social
networking sites is Facebook. It lets people update their personal profiles and
shares the updates with other people who they have declared to be their friends.
Other social networking applications can make introductions via friends of
friends, send news messages to friends such as Twitter above, and much more.
Even more loosely, groups of people can work together to create content. A
wiki, for example, is a collaborative Web site that the members of a community
edit. The most famous wiki is the Wikipedia, an encyclopedia anyone can edit,
but there are thousands of other wikis.
Our third category is electronic commerce in the broadest sense of the term.
Home shopping is already popular and enables users to inspect the online catalogs
of thousands of companies. Some of these catalogs are interactive, showing products
from different viewpoints and in configurations that can be personalized.
opposing team. Virtual worlds provide a persistent setting in which thousands of
users can experience a shared reality with three-dimensional graphics.
Our last category is ubiquitous computing, in which computing is embedded
into everyday life, as in the vision of Mark Weiser (1991). Many homes are already
wired with security systems that include door and window sensors, and
there are many more sensors that can be folded in to a smart home monitor, such
as energy consumption. Your electricity, gas and water meters could also report
usage over the network. This would save money as there would be no need to
send out meter readers. And your smoke detectors could call the fire department
instead of making a big noise (which has little value if no one is home). As the
cost of sensing and communication drops, more and more measurement and reporting
will be done with networks.
Increasingly, consumer electronic devices are networked. For example, some
high-end cameras already have a wireless network capability and use it to send
photos to a nearby display for viewing. Professional sports photographers can
also send their photos to their editors in real-time, first wirelessly to an access
point then over the Internet. Devices such as televisions that plug into the wall
can use power-line networks to send information throughout the house over the
wires that carry electricity. It may not be very surprising to have these objects on
the network, but objects that we do not think of as computers may sense and communicate
information too. For example, your shower may record water usage,
give you visual feedback while you lather up, and report to a home environmental
monitoring application when you are done to help save on your water bill.
A technology called RFID (Radio Frequency IDentification) will push this
idea even further in the future. RFID tags are passive (i.e., have no battery) chips
the size of stamps and they can already be affixed to books, passports, pets, credit
cards, and other items in the home and out. This lets RFID readers locate and
communicate with the items over a distance of up to several meters, depending on
the kind of RFID. Originally, RFID was commercialized to replace barcodes. It
has not succeeded yet because barcodes are free and RFID tags cost a few cents.
Of course, RFID tags offer much more and their price is rapidly declining. They
may turn the real world into the Internet of things (ITU, 2005).
1.1.3 Mobile Users
Mobile computers, such as laptop and handheld computers, are one of the
fastest-growing segments of the computer industry. Their sales have already
overtaken those of desktop computers. Why would anyone want one? People on
the go often want to use their mobile devices to read and send email, tweet, watch
movies, download music, play games, or simply to surf the Web for information.
They want to do all of the things they do at home and in the office. Naturally, they
want to do them from anywhere on land, sea or in the air.
no longer needed. Since all communication from the mobile telephones went
inbound on a different channel than the outbound signals, the mobile users could
not hear each other (unlike the push-to-talk system used in taxis).
IMTS supported 23 channels spread out from 150 MHz to 450 MHz. Due to
the small number of channels, users often had to wait a long time before getting a
dial tone. Also, due to the large power of the hilltop transmitters, adjacent systems
had to be several hundred kilometers apart to avoid interference. All in all,
the limited capacity made the system impractical.
Advanced Mobile Phone System
All that changed with AMPS (Advanced Mobile Phone System), invented
by Bell Labs and first installed in the United States in 1982. It was also used in
England, where it was called TACS, and in Japan, where it was called MCS-L1.
AMPS was formally retired in 2008, but we will look at it to understand the context
for the 2G and 3G systems that improved on it.
In all mobile phone systems, a geographic region is divided up into cells,
which is why the devices are sometimes called cell phones. In AMPS, the cells
are typically 10 to 20 km across; in digital systems, the cells are smaller. Each
cell uses some set of frequencies not used by any of its neighbors. The key idea
that gives cellular systems far more capacity than previous systems is the use of
relatively small cells and the reuse of transmission frequencies in nearby (but not
adjacent) cells. Whereas an IMTS system 100 km across can have only one call
on each frequency, an AMPS system might have 100 10-km cells in the same area
and be able to have 10 to 15 calls on each frequency, in widely separated cells.
Thus, the cellular design increases the system capacity by at least an order of
magnitude, more as the cells get smaller. Furthermore, smaller cells mean that
less power is needed, which leads to smaller and cheaper transmitters and
handsets.
The idea of frequency reuse is illustrated in Fig. 2-45(a). The cells are normally
roughly circular, but they are easier to model as hexagons. In Fig. 2-45(a),
the cells are all the same size. They are grouped in units of seven cells. Each
letter indicates a group of frequencies. Notice that for each frequency set, there is
a buffer about two cells wide where that frequency is not reused, providing for
good separation and low interference.
Finding locations high in the air to place base station antennas is a major
issue. This problem has led some telecommunication carriers to forge alliances
with the Roman Catholic Church, since the latter owns a substantial number of
exalted potential antenna sites worldwide, all conveniently under a single management.
In an area where the number of users has grown to the point that the system is
overloaded, the power can be reduced and the overloaded cells split into smaller
microcells to permit more frequency reuse, as shown in Fig. 2-45(b). Telephone
companies sometimes create temporary microcells, using portable towers with
satellite links at sporting events, rock concerts, and other places where large numbers
of mobile users congregate for a few hours.
At the center of each cell is a base station to which all the telephones in the
cell transmit. The base station consists of a computer and transmitter/receiver
connected to an antenna. In a small system, all the base stations are connected to
a single device called an MSC (Mobile Switching Center) or MTSO (Mobile
Telephone Switching Office). In a larger one, several MSCs may be needed, all
of which are connected to a second-level MSC, and so on. The MSCs are essentially
end offices as in the telephone system, and are in fact connected to at least
one telephone system end office. The MSCs communicate with the base stations,
each other, and the PSTN using a packet-switching network.
At any instant, each mobile telephone is logically in one specific cell and under
the control of that cell’s base station. When a mobile telephone physically
leaves a cell, its base station notices the telephone’s signal fading away and asks
all the surrounding base stations how much power they are getting from it. When
the answers come back, the base station then transfers ownership to the cell getting
the strongest signal; under most conditions that is the cell where the telephone
is now located. The telephone is then informed of its new boss, and if a
call is in progress, it is asked to switch to a new channel (because the old one is
not reused in any of the adjacent cells). This process, called handoff, takes about
300 msec. Channel assignment is done by the MSC, the nerve center of the system.
The base stations are really just dumb radio relays.
AMPS uses FDM to separate the channels. The system uses 832 full-duplex
channels, each consisting of a pair of simplex channels. This arrangement is
known as FDD (Frequency Division Duplex). The 832 simplex channels from
824 to 849 MHz are used for mobile to base station transmission, and 832 simplex
channels from 869 to 894 MHz are used for base station to mobile transmission.
Each of these simplex channels is 30 kHz wide.
The 832 channels are divided into four categories. Control channels (base to
mobile) are used to manage the system. Paging channels (base to mobile) alert
mobile users to calls for them. Access channels (bidirectional) are used for call
setup and channel assignment. Finally, data channels (bidirectional) carry voice,
fax, or data. Since the same frequencies cannot be reused in nearby cells and 21
channels are reserved in each cell for control, the actual number of voice channels
available per cell is much smaller than 832, typically about 45.
Call Management
Each mobile telephone in AMPS has a 32-bit serial number and a 10-digit
telephone number in its programmable read-only memory. The telephone number
is represented as a 3-digit area code in 10 bits and a 7-digit subscriber number in
24 bits. When a phone is switched on, it scans a preprogrammed list of 21 control
channels to find the most powerful signal. The phone then broadcasts its 32-bit
serial number and 34-bit telephone number. Like all the control information in
AMPS, this packet is sent in digital form, multiple times, and with an error-correcting
code, even though the voice channels themselves are analog.
When the base station hears the announcement, it tells the MSC, which
records the existence of its new customer and also informs the customer’s home
MSC of his current location. During normal operation, the mobile telephone
reregisters about once every 15 minutes.
To make a call, a mobile user switches on the phone, enters the number to be
called on the keypad, and hits the SEND button. The phone then transmits the
number to be called and its own identity on the access channel. If a collision occurs
there, it tries again later. When the base station gets the request, it informs
the MSC. If the caller is a customer of the MSC’s company (or one of its
partners), the MSC looks for an idle channel for the call. If one is found, the
channel number is sent back on the control channel. The mobile phone then automatically
switches to the selected voice channel and waits until the called party
picks up the phone.
Incoming calls work differently. To start with, all idle phones continuously
listen to the paging channel to detect messages directed at them. When a call is
placed to a mobile phone (either from a fixed phone or another mobile phone), a
packet is sent to the callee’s home MSC to find out where

The first generation of mobile phones was analog; the second generation is
digital. Switching to digital has several advantages. It provides capacity gains by
allowing voice signals to be digitized and compressed. It improves security by allowing
voice and control signals to be encrypted. This in turn deters fraud and
eavesdropping, whether from intentional scanning or echoes of other calls due to
RF propagation. Finally, it enables new services such as text messaging.
Just as there was no worldwide standardization during the first generation,
there was also no worldwide standardization during the second, either. Several
different systems were developed, and three have been widely deployed. DAMPS
(Digital Advanced Mobile Phone System) is a digital version of AMPS
that coexists with AMPS and uses TDM to place multiple calls on the same frequency
channel. It is described in International Standard IS-54 and its successor
IS-136. GSM (Global System for Mobile communications) has emerged as the
dominant system, and while it was slow to catch on in the U.S. it is now used virtually
everywhere in the world. Like D-AMPS, GSM is based on a mix of FDM
and TDM. CDMA (Code Division Multiple Access), described in International
Standard IS-95, is a completely different kind of system and is based on neither
FDM mor TDM. While CDMA has not become the dominant 2G system, its
technology has become the basis for 3G systems.
Also, the name PCS (Personal Communications Services) is sometimes
used in the marketing literature to indicate a second-generation (i.e., digital) system.
Originally it meant a mobile phone using the 1900 MHz band, but that distinction
is rarely made now.
We will now describe GSM, since it is the dominant 2G system. In the next
section we will have more to say about CDMA when we describe 3G systems.
GSM—The Global System for Mobile Communications
GSM started life in the 1980s as an effort to produce a single European 2G
standard. The task was assigned to a telecommunications group called (in French)
Groupe Speciale´ Mobile. The first GSM systems were deployed starting in 1991
and were a quick success. It soon became clear that GSM was going to be more
than a European success, with uptake stretching to countries as far away as Australia,
so GSM was renamed to have a more worldwide appeal.
The first generation of mobile phones was analog; the second generation is
digital. Switching to digital has several advantages. It provides capacity gains by
allowing voice signals to be digitized and compressed. It improves security by allowing
voice and control signals to be encrypted. This in turn deters fraud and
eavesdropping, whether from intentional scanning or echoes of other calls due to
RF propagation. Finally, it enables new services such as text messaging.
Just as there was no worldwide standardization during the first generation,
there was also no worldwide standardization during the second, either. Several
different systems were developed, and three have been widely deployed. DAMPS
(Digital Advanced Mobile Phone System) is a digital version of AMPS
that coexists with AMPS and uses TDM to place multiple calls on the same frequency
channel. It is described in International Standard IS-54 and its successor
IS-136. GSM (Global System for Mobile communications) has emerged as the
dominant system, and while it was slow to catch on in the U.S. it is now used virtually
everywhere in the world. Like D-AMPS, GSM is based on a mix of FDM
and TDM. CDMA (Code Division Multiple Access), described in International
Standard IS-95, is a completely different kind of system and is based on neither
FDM mor TDM. While CDMA has not become the dominant 2G system, its
technology has become the basis for 3G systems.
Also, the name PCS (Personal Communications Services) is sometimes
used in the marketing literature to indicate a second-generation (i.e., digital) system.
Originally it meant a mobile phone using the 1900 MHz band, but that distinction
is rarely made now.
We will now describe GSM, since it is the dominant 2G system. In the next
section we will have more to say about CDMA when we describe 3G systems.
GSM—The Global System for Mobile Communications
GSM started life in the 1980s as an effort to produce a single European 2G
standard. The task was assigned to a telecommunications group called (in French)
Groupe Speciale´ Mobile. The first GSM systems were deployed starting in 1991
and were a quick success. It soon became clear that GSM was going to be more
than a European success, with uptake stretching to countries as far away as Australia,
so GSM was renamed to have a more worldwide appeal.
The first generation of mobile phones was analog; the second generation is
digital. Switching to digital has several advantages. It provides capacity gains by
allowing voice signals to be digitized and compressed. It improves security by allowing
voice and control signals to be encrypted. This in turn deters fraud and
eavesdropping, whether from intentional scanning or echoes of other calls due to
RF propagation. Finally, it enables new services such as text messaging.
Just as there was no worldwide standardization during the first generation,
there was also no worldwide standardization during the second, either. Several
different systems were developed, and three have been widely deployed. DAMPS
(Digital Advanced Mobile Phone System) is a digital version of AMPS
that coexists with AMPS and uses TDM to place multiple calls on the same frequency
channel. It is described in International Standard IS-54 and its successor
IS-136. GSM (Global System for Mobile communications) has emerged as the
dominant system, and while it was slow to catch on in the U.S. it is now used virtually
everywhere in the world. Like D-AMPS, GSM is based on a mix of FDM
and TDM. CDMA (Code Division Multiple Access), described in International
Standard IS-95, is a completely different kind of system and is based on neither
FDM mor TDM. While CDMA has not become the dominant 2G system, its
technology has become the basis for 3G systems.
Also, the name PCS (Personal Communications Services) is sometimes
used in the marketing literature to indicate a second-generation (i.e., digital) system.
Originally it meant a mobile phone using the 1900 MHz band, but that distinction
is rarely made now.
We will now describe GSM, since it is the dominant 2G system. In the next
section we will have more to say about CDMA when we describe 3G systems.
GSM—The Global System for Mobile Communications
GSM started life in the 1980s as an effort to produce a single European 2G
standard. The task was assigned to a telecommunications group called (in French)
Groupe Speciale´ Mobile. The first GSM systems were deployed starting in 1991
and were a quick success. It soon became clear that GSM was going to be more
than a European success, with uptake stretching to countries as far away as Australia,
so GSM was renamed to have a more worldwide appeal.
The first generation of mobile phones was analog; the second generation is
digital. Switching to digital has several advantages. It provides capacity gains by
allowing voice signals to be digitized and compressed. It improves security by allowing
voice and control signals to be encrypted. This in turn deters fraud and
eavesdropping, whether from intentional scanning or echoes of other calls due to
RF propagation. Finally, it enables new services such as text messaging.
Just as there was no worldwide standardization during the first generation,
there was also no worldwide standardization during the second, either. Several
different systems were developed, and three have been widely deployed. DAMPS
(Digital Advanced Mobile Phone System) is a digital version of AMPS
that coexists with AMPS and uses TDM to place multiple calls on the same frequency
channel. It is described in International Standard IS-54 and its successor
IS-136. GSM (Global System for Mobile communications) has emerged as the
dominant system, and while it was slow to catch on in the U.S. it is now used virtually
everywhere in the world. Like D-AMPS, GSM is based on a mix of FDM
and TDM. CDMA (Code Division Multiple Access), described in International
Standard IS-95, is a completely different kind of system and is based on neither
FDM mor TDM. While CDMA has not become the dominant 2G system, its
technology has become the basis for 3G systems.
Also, the name PCS (Personal Communications Services) is sometimes
used in the marketing literature to indicate a second-generation (i.e., digital) system.
Originally it meant a mobile phone using the 1900 MHz band, but that distinction
is rarely made now.
We will now describe GSM, since it is the dominant 2G system. In the next
section we will have more to say about CDMA when we describe 3G systems.
GSM—The Global System for Mobile Communications
GSM started life in the 1980s as an effort to produce a single European 2G
standard. The task was assigned to a telecommunications group called (in French)
Groupe Speciale´ Mobile. The first GSM systems were deployed starting in 1991
and were a quick success. It soon became clear that GSM was going to be more
than a European success, with uptake stretching to countries as far away as Australia,
so GSM was renamed to have a more worldwide appeal.The first generation of mobile phones was analog; the second generation is
digital. Switching to digital has several advantages. It provides capacity gains by
allowing voice signals to be digitized and compressed. It improves security by allowing
voice and control signals to be encrypted. This in turn deters fraud and
eavesdropping, whether from intentional scanning or echoes of other calls due to
RF propagation. Finally, it enables new services such as text messaging.
Just as there was no worldwide standardization during the first generation,
there was also no worldwide standardization during the second, either. Several
different systems were developed, and three have been widely deployed. DAMPS
(Digital Advanced Mobile Phone System) is a digital version of AMPS
that coexists with AMPS and uses TDM to place multiple calls on the same frequency
channel. It is described in International Standard IS-54 and its successor
IS-136. GSM (Global System for Mobile communications) has emerged as the
dominant system, and while it was slow to catch on in the U.S. it is now used virtually
everywhere in the world. Like D-AMPS, GSM is based on a mix of FDM
and TDM. CDMA (Code Division Multiple Access), described in International
Standard IS-95, is a completely different kind of system and is based on neither
FDM mor TDM. While CDMA has not become the dominant 2G system, its
technology has become the basis for 3G systems.
Also, the name PCS (Personal Communications Services) is sometimes
used in the marketing literature to indicate a second-generation (i.e., digital) system.
Originally it meant a mobile phone using the 1900 MHz band, but that distinction
is rarely made now.
We will now describe GSM, since it is the dominant 2G system. In the next
section we will have more to say about CDMA when we describe 3G systems.
GSM—The Global System for Mobile Communications
GSM started life in the 1980s as an effort to produce a single European 2G
standard. The task was assigned to a telecommunications group called (in French)
Groupe Speciale´ Mobile. The first GSM systems were deployed starting in 1991
and were a quick success. It soon became clear that GSM was going to be more
than a European success, with uptake stretching to countries as far away as Australia,
so GSM was renamed to have a more worldwide appeal.The first generation of mobile phones was analog; the second generation is
digital. Switching to digital has several advantages. It provides capacity gains by
allowing voice signals to be digitized and compressed. It improves security by allowing
voice and control signals to be encrypted. This in turn deters fraud and
eavesdropping, whether from intentional scanning or echoes of other calls due to
RF propagation. Finally, it enables new services such as text messaging.
Just as there was no worldwide standardization during the first generation,
there was also no worldwide standardization during the second, either. Several
different systems were developed, and three have been widely deployed. DAMPS
(Digital Advanced Mobile Phone System) is a digital version of AMPS
that coexists with AMPS and uses TDM to place multiple calls on the same frequency
channel. It is described in International Standard IS-54 and its successor
IS-136. GSM (Global System for Mobile communications) has emerged as the
dominant system, and while it was slow to catch on in the U.S. it is now used virtually
everywhere in the world. Like D-AMPS, GSM is based on a mix of FDM
and TDM. CDMA (Code Division Multiple Access), described in International
Standard IS-95, is a completely different kind of system and is based on neither
FDM mor TDM. While CDMA has not become the dominant 2G system, its
technology has become the basis for 3G systems.
Also, the name PCS (Personal Communications Services) is sometimes
used in the marketing literature to indicate a second-generation (i.e., digital) system.
Originally it meant a mobile phone using the 1900 MHz band, but that distinction
is rarely made now.
We will now describe GSM, since it is the dominant 2G system. In the next
section we will have more to say about CDMA when we describe 3G systems.
GSM—The Global System for Mobile Communications
GSM started life in the 1980s as an effort to produce a single European 2G
standard. The task was assigned to a telecommunications group called (in French)
Groupe Speciale´ Mobile. The first GSM systems were deployed starting in 1991
and were a quick success. It soon became clear that GSM was going to be more
than a European success, with uptake stretching to countries as far away as Australia,
so GSM was renamed to have a more worldwide appeal.The first generation of mobile phones was analog; the second generation is
digital. Switching to digital has several advantages. It provides capacity gains by
allowing voice signals to be digitized and compressed. It improves security by allowing
voice and control signals to be encrypted. This in turn deters fraud and
eavesdropping, whether from intentional scanning or echoes of other calls due to
RF propagation. Finally, it enables new services such as text messaging.
Just as there was no worldwide standardization during the first generation,
there was also no worldwide standardization during the second, either. Several
different systems were developed, and three have been widely deployed. DAMPS
(Digital Advanced Mobile Phone System) is a digital version of AMPS
that coexists with AMPS and uses TDM to place multiple calls on the same frequency
channel. It is described in International Standard IS-54 and its successor
IS-136. GSM (Global System for Mobile communications) has emerged as the
dominant system, and while it was slow to catch on in the U.S. it is now used virtually
everywhere in the world. Like D-AMPS, GSM is based on a mix of FDM
and TDM. CDMA (Code Division Multiple Access), described in International
Standard IS-95, is a completely different kind of system and is based on neither
FDM mor TDM. While CDMA has not become the dominant 2G system, its
technology has become the basis for 3G systems.
Also, the name PCS (Personal Communications Services) is sometimes
used in the marketing literature to indicate a second-generation (i.e., digital) system.
Originally it meant a mobile phone using the 1900 MHz band, but that distinction
is rarely made now.
We will now describe GSM, since it is the dominant 2G system. In the next
section we will have more to say about CDMA when we describe 3G systems.
GSM—The Global System for Mobile Communications
GSM started life in the 1980s as an effort to produce a single European 2G
standard. The task was assigned to a telecommunications group called (in French)
Groupe Speciale´ Mobile. The first GSM systems were deployed starting in 1991
and were a quick success. It soon became clear that GSM was going to be more
than a European success, with uptake stretching to countries as far away as Australia,
so GSM was renamed to have a more worldwide appeal.The first generation of mobile phones was analog; the second generation is
digital. Switching to digital has several advantages. It provides capacity gains by
allowing voice signals to be digitized and compressed. It improves security by allowing
voice and control signals to be encrypted. This in turn deters fraud and
eavesdropping, whether from intentional scanning or echoes of other calls due to
RF propagation. Finally, it enables new services such as text messaging.
Just as there was no worldwide standardization during the first generation,
there was also no worldwide standardization during the second, either. Several
different systems were developed, and three have been widely deployed. DAMPS
(Digital Advanced Mobile Phone System) is a digital version of AMPS
that coexists with AMPS and uses TDM to place multiple calls on the same frequency
channel. It is described in International Standard IS-54 and its successor
IS-136. GSM (Global System for Mobile communications) has emerged as the
dominant system, and while it was slow to catch on in the U.S. it is now used virtually
everywhere in the world. Like D-AMPS, GSM is based on a mix of FDM
and TDM. CDMA (Code Division Multiple Access), described in International
Standard IS-95, is a completely different kind of system and is based on neither
FDM mor TDM. While CDMA has not become the dominant 2G system, its
technology has become the basis for 3G systems.
Also, the name PCS (Personal Communications Services) is sometimes
used in the marketing literature to indicate a second-generation (i.e., digital) system.
Originally it meant a mobile phone using the 1900 MHz band, but that distinction
is rarely made now.
We will now describe GSM, since it is the dominant 2G system. In the next
section we will have more to say about CDMA when we describe 3G systems.
GSM—The Global System for Mobile Communications
GSM started life in the 1980s as an effort to produce a single European 2G
standard. The task was assigned to a telecommunications group called (in French)
Groupe Speciale´ Mobile. The first GSM systems were deployed starting in 1991
and were a quick success. It soon became clear that GSM was going to be more
than a European success, with uptake stretching to countries as far away as Australia,
so GSM was renamed to have a more worldwide appeal.The first generation of mobile phones was analog; the second generation is
digital. Switching to digital has several advantages. It provides capacity gains by
allowing voice signals to be digitized and compressed. It improves security by allowing
voice and control signals to be encrypted. This in turn deters fraud and
eavesdropping, whether from intentional scanning or echoes of other calls due to
RF propagation. Finally, it enables new services such as text messaging.
Just as there was no worldwide standardization during the first generation,
there was also no worldwide standardization during the second, either. Several
different systems were developed, and three have been widely deployed. DAMPS
(Digital Advanced Mobile Phone System) is a digital version of AMPS
that coexists with AMPS and uses TDM to place multiple calls on the same frequency
channel. It is described in International Standard IS-54 and its successor
IS-136. GSM (Global System for Mobile communications) has emerged as the
dominant system, and while it was slow to catch on in the U.S. it is now used virtually
everywhere in the world. Like D-AMPS, GSM is based on a mix of FDM
and TDM. CDMA (Code Division Multiple Access), described in International
Standard IS-95, is a completely different kind of system and is based on neither
FDM mor TDM. While CDMA has not become the dominant 2G system, its
technology has become the basis for 3G systems.
Also, the name PCS (Personal Communications Services) is sometimes
used in the marketing literature to indicate a second-generation (i.e., digital) system.
Originally it meant a mobile phone using the 1900 MHz band, but that distinction
is rarely made now.
We will now describe GSM, since it is the dominant 2G system. In the next
section we will have more to say about CDMA when we describe 3G systems.
GSM—The Global System for Mobile Communications
GSM started life in the 1980s as an effort to produce a single European 2G
standard. The task was assigned to a telecommunications group called (in French)
Groupe Speciale´ Mobile. The first GSM systems were deployed starting in 1991
and were a quick success. It soon became clear that GSM was going to be more
than a European success, with uptake stretching to countries as far away as Australia,
so GSM was renamed to have a more worldwide appeal.The first generation of mobile phones was analog; the second generation is
digital. Switching to digital has several advantages. It provides capacity gains by
allowing voice signals to be digitized and compressed. It improves security by allowing
voice and control signals to be encrypted. This in turn deters fraud and
eavesdropping, whether from intentional scanning or echoes of other calls due to
RF propagation. Finally, it enables new services such as text messaging.
Just as there was no worldwide standardization during the first generation,
there was also no worldwide standardization during the second, either. Several
different systems were developed, and three have been widely deployed. DAMPS
(Digital Advanced Mobile Phone System) is a digital version of AMPS
that coexists with AMPS and uses TDM to place multiple calls on the same frequency
channel. It is described in International Standard IS-54 and its successor
IS-136. GSM (Global System for Mobile communications) has emerged as the
dominant system, and while it was slow to catch on in the U.S. it is now used virtually
everywhere in the world. Like D-AMPS, GSM is based on a mix of FDM
and TDM. CDMA (Code Division Multiple Access), described in International
Standard IS-95, is a completely different kind of system and is based on neither
FDM mor TDM. While CDMA has not become the dominant 2G system, its
technology has become the basis for 3G systems.
Also, the name PCS (Personal Communications Services) is sometimes
used in the marketing literature to indicate a second-generation (i.e., digital) system.
Originally it meant a mobile phone using the 1900 MHz band, but that distinction
is rarely made now.
We will now describe GSM, since it is the dominant 2G system. In the next
section we will have more to say about CDMA when we describe 3G systems.
GSM—The Global System for Mobile Communications
GSM started life in the 1980s as an effort to produce a single European 2G
standard. The task was assigned to a telecommunications group called (in French)
Groupe Speciale´ Mobile. The first GSM systems were deployed starting in 1991
and were a quick success. It soon became clear that GSM was going to be more
than a European success, with uptake stretching to countries as far away as Australia,
so GSM was renamed to have a more worldwide appeal.The first generation of mobile phones was analog; the second generation is
digital. Switching to digital has several advantages. It provides capacity gains by
allowing voice signals to be digitized and compressed. It improves security by allowing
voice and control signals to be encrypted. This in turn deters fraud and
eavesdropping, whether from intentional scanning or echoes of other calls due to
RF propagation. Finally, it enables new services such as text messaging.
Just as there was no worldwide standardization during the first generation,
there was also no worldwide standardization during the second, either. Several
different systems were developed, and three have been widely deployed. DAMPS
(Digital Advanced Mobile Phone System) is a digital version of AMPS
that coexists with AMPS and uses TDM to place multiple calls on the same frequency
channel. It is described in International Standard IS-54 and its successor
IS-136. GSM (Global System for Mobile communications) has emerged as the
dominant system, and while it was slow to catch on in the U.S. it is now used virtually
everywhere in the world. Like D-AMPS, GSM is based on a mix of FDM
and TDM. CDMA (Code Division Multiple Access), described in International
Standard IS-95, is a completely different kind of system and is based on neither
FDM mor TDM. While CDMA has not become the dominant 2G system, its
technology has become the basis for 3G systems.
Also, the name PCS (Personal Communications Services) is sometimes
used in the marketing literature to indicate a second-generation (i.e., digital) system.
Originally it meant a mobile phone using the 1900 MHz band, but that distinction
is rarely made now.
We will now describe GSM, since it is the dominant 2G system. In the next
section we will have more to say about CDMA when we describe 3G systems.
GSM—The Global System for Mobile Communications
GSM started life in the 1980s as an effort to produce a single European 2G
standard. The task was assigned to a telecommunications group called (in French)
Groupe Speciale´ Mobile. The first GSM systems were deployed starting in 1991
and were a quick success. It soon became clear that GSM was going to be more
than a European success, with uptake stretching to countries as far away as Australia,
so GSM was renamed to have a more worldwide appeal.The first generation of mobile phones was analog; the second generation is
digital. Switching to digital has several advantages. It provides capacity gains by
allowing voice signals to be digitized and compressed. It improves security by allowing
voice and control signals to be encrypted. This in turn deters fraud and
eavesdropping, whether from intentional scanning or echoes of other calls due to
RF propagation. Finally, it enables new services such as text messaging.
Just as there was no worldwide standardization during the first generation,
there was also no worldwide standardization during the second, either. Several
different systems were developed, and three have been widely deployed. DAMPS
(Digital Advanced Mobile Phone System) is a digital version of AMPS
that coexists with AMPS and uses TDM to place multiple calls on the same frequency
channel. It is described in International Standard IS-54 and its successor
IS-136. GSM (Global System for Mobile communications) has emerged as the
dominant system, and while it was slow to catch on in the U.S. it is now used virtually
everywhere in the world. Like D-AMPS, GSM is based on a mix of FDM
and TDM. CDMA (Code Division Multiple Access), described in International
Standard IS-95, is a completely different kind of system and is based on neither
FDM mor TDM. While CDMA has not become the dominant 2G system, its
technology has become the basis for 3G systems.
Also, the name PCS (Personal Communications Services) is sometimes
used in the marketing literature to indicate a second-generation (i.e., digital) system.
Originally it meant a mobile phone using the 1900 MHz band, but that distinction
is rarely made now.
We will now describe GSM, since it is the dominant 2G system. In the next
section we will have more to say about CDMA when we describe 3G systems.
GSM—The Global System for Mobile Communications
GSM started life in the 1980s as an effort to produce a single European 2G
standard. The task was assigned to a telecommunications group called (in French)
Groupe Speciale´ Mobile. The first GSM systems were deployed starting in 1991
and were a quick success. It soon became clear that GSM was going to be more
than a European success, with uptake stretching to countries as far away as Australia,
so GSM was renamed to have a more worldwide appeal.The first generation of mobile phones was analog; the second generation is
digital. Switching to digital has several advantages. It provides capacity gains by
allowing voice signals to be digitized and compressed. It improves security by allowing
voice and control signals to be encrypted. This in turn deters fraud and
eavesdropping, whether from intentional scanning or echoes of other calls due to
RF propagation. Finally, it enables new services such as text messaging.
Just as there was no worldwide standardization during the first generation,
there was also no worldwide standardization during the second, either. Several
different systems were developed, and three have been widely deployed. DAMPS
(Digital Advanced Mobile Phone System) is a digital version of AMPS
that coexists with AMPS and uses TDM to place multiple calls on the same frequency
channel. It is described in International Standard IS-54 and its successor
IS-136. GSM (Global System for Mobile communications) has emerged as the
dominant system, and while it was slow to catch on in the U.S. it is now used virtually
everywhere in the world. Like D-AMPS, GSM is based on a mix of FDM
and TDM. CDMA (Code Division Multiple Access), described in International
Standard IS-95, is a completely different kind of system and is based on neither
FDM mor TDM. While CDMA has not become the dominant 2G system, its
technology has become the basis for 3G systems.
Also, the name PCS (Personal Communications Services) is sometimes
used in the marketing literature to indicate a second-generation (i.e., digital) system.
Originally it meant a mobile phone using the 1900 MHz band, but that distinction
is rarely made now.
We will now describe GSM, since it is the dominant 2G system. In the next
section we will have more to say about CDMA when we describe 3G systems.
GSM—The Global System for Mobile Communications
GSM started life in the 1980s as an effort to produce a single European 2G
standard. The task was assigned to a telecommunications group called (in French)
Groupe Speciale´ Mobile. The first GSM systems were deployed starting in 1991
and were a quick success. It soon became clear that GSM was going to be more
than a European success, with uptake stretching to countries as far away as Australia,
so GSM was renamed to have a more worldwide appeal.The first generation of mobile phones was analog; the second generation is
digital. Switching to digital has several advantages. It provides capacity gains by
allowing voice signals to be digitized and compressed. It improves security by allowing
voice and control signals to be encrypted. This in turn deters fraud and
eavesdropping, whether from intentional scanning or echoes of other calls due to
RF propagation. Finally, it enables new services such as text messaging.
Just as there was no worldwide standardization during the first generation,
there was also no worldwide standardization during the second, either. Several
different systems were developed, and three have been widely deployed. DAMPS
(Digital Advanced Mobile Phone System) is a digital version of AMPS
that coexists with AMPS and uses TDM to place multiple calls on the same frequency
channel. It is described in International Standard IS-54 and its successor
IS-136. GSM (Global System for Mobile communications) has emerged as the
dominant system, and while it was slow to catch on in the U.S. it is now used virtually
everywhere in the world. Like D-AMPS, GSM is based on a mix of FDM
and TDM. CDMA (Code Division Multiple Access), described in International
Standard IS-95, is a completely different kind of system and is based on neither
FDM mor TDM. While CDMA has not become the dominant 2G system, its
technology has become the basis for 3G systems.
Also, the name PCS (Personal Communications Services) is sometimes
used in the marketing literature to indicate a second-generation (i.e., digital) system.
Originally it meant a mobile phone using the 1900 MHz band, but that distinction
is rarely made now.
We will now describe GSM, since it is the dominant 2G system. In the next
section we will have more to say about CDMA when we describe 3G systems.
GSM—The Global System for Mobile Communications
GSM started life in the 1980s as an effort to produce a single European 2G
standard. The task was assigned to a telecommunications group called (in French)
Groupe Speciale´ Mobile. The first GSM systems were deployed starting in 1991
and were a quick success. It soon became clear that GSM was going to be more
than a European success, with uptake stretching to countries as far away as Australia,
so GSM was renamed to have a more worldwide appeal.The first generation of mobile phones was analog; the second generation is
digital. Switching to digital has several advantages. It provides capacity gains by
allowing voice signals to be digitized and compressed. It improves security by allowing
voice and control signals to be encrypted. This in turn deters fraud and
eavesdropping, whether from intentional scanning or echoes of other calls due to
RF propagation. Finally, it enables new services such as text messaging.
Just as there was no worldwide standardization during the first generation,
there was also no worldwide standardization during the second, either. Several
different systems were developed, and three have been widely deployed. DAMPS
(Digital Advanced Mobile Phone System) is a digital version of AMPS
that coexists with AMPS and uses TDM to place multiple calls on the same frequency
channel. It is described in International Standard IS-54 and its successor
IS-136. GSM (Global System for Mobile communications) has emerged as the
dominant system, and while it was slow to catch on in the U.S. it is now used virtually
everywhere in the world. Like D-AMPS, GSM is based on a mix of FDM
and TDM. CDMA (Code Division Multiple Access), described in International
Standard IS-95, is a completely different kind of system and is based on neither
FDM mor TDM. While CDMA has not become the dominant 2G system, its
technology has become the basis for 3G systems.
Also, the name PCS (Personal Communications Services) is sometimes
used in the marketing literature to indicate a second-generation (i.e., digital) system.
Originally it meant a mobile phone using the 1900 MHz band, but that distinction
is rarely made now.
We will now describe GSM, since it is the dominant 2G system. In the next
section we will have more to say about CDMA when we describe 3G systems.
GSM—The Global System for Mobile Communications
GSM started life in the 1980s as an effort to produce a single European 2G
standard. The task was assigned to a telecommunications group called (in French)
Groupe Speciale´ Mobile. The first GSM systems were deployed starting in 1991
and were a quick success. It soon became clear that GSM was going to be more
than a European success, with uptake stretching to countries as far away as Australia,
so GSM was renamed to have a more worldwide appeal.The first generation of mobile phones was analog; the second generation is
digital. Switching to digital has several advantages. It provides capacity gains by
allowing voice signals to be digitized and compressed. It improves security by allowing
voice and control signals to be encrypted. This in turn deters fraud and
eavesdropping, whether from intentional scanning or echoes of other calls due to
RF propagation. Finally, it enables new services such as text messaging.
Just as there was no worldwide standardization during the first generation,
there was also no worldwide standardization during the second, either. Several
different systems were developed, and three have been widely deployed. DAMPS
(Digital Advanced Mobile Phone System) is a digital version of AMPS
that coexists with AMPS and uses TDM to place multiple calls on the same frequency
channel. It is described in International Standard IS-54 and its successor
IS-136. GSM (Global System for Mobile communications) has emerged as the
dominant system, and while it was slow to catch on in the U.S. it is now used virtually
everywhere in the world. Like D-AMPS, GSM is based on a mix of FDM
and TDM. CDMA (Code Division Multiple Access), described in International
Standard IS-95, is a completely different kind of system and is based on neither
FDM mor TDM. While CDMA has not become the dominant 2G system, its
technology has become the basis for 3G systems.
Also, the name PCS (Personal Communications Services) is sometimes
used in the marketing literature to indicate a second-generation (i.e., digital) system.
Originally it meant a mobile phone using the 1900 MHz band, but that distinction
is rarely made now.
We will now describe GSM, since it is the dominant 2G system. In the next
section we will have more to say about CDMA when we describe 3G systems.
GSM—The Global System for Mobile Communications
GSM started life in the 1980s as an effort to produce a single European 2G
standard. The task was assigned to a telecommunications group called (in French)
Groupe Speciale´ Mobile. The first GSM systems were deployed starting in 1991
and were a quick success. It soon became clear that GSM was going to be more
than a European success, with uptake stretching to countries as far away as Australia,
so GSM was renamed to have a more worldwide appeal.The first generation of mobile phones was analog; the second generation is
digital. Switching to digital has several advantages. It provides capacity gains by
allowing voice signals to be digitized and compressed. It improves security by allowing
voice and control signals to be encrypted. This in turn deters fraud and
eavesdropping, whether from intentional scanning or echoes of other calls due to
RF propagation. Finally, it enables new services such as text messaging.
Just as there was no worldwide standardization during the first generation,
there was also no worldwide standardization during the second, either. Several
different systems were developed, and three have been widely deployed. DAMPS
(Digital Advanced Mobile Phone System) is a digital version of AMPS
that coexists with AMPS and uses TDM to place multiple calls on the same frequency
channel. It is described in International Standard IS-54 and its successor
IS-136. GSM (Global System for Mobile communications) has emerged as the
dominant system, and while it was slow to catch on in the U.S. it is now used virtually
everywhere in the world. Like D-AMPS, GSM is based on a mix of FDM
and TDM. CDMA (Code Division Multiple Access), described in International
Standard IS-95, is a completely different kind of system and is based on neither
FDM mor TDM. While CDMA has not become the dominant 2G system, its
technology has become the basis for 3G systems.
Also, the name PCS (Personal Communications Services) is sometimes
used in the marketing literature to indicate a second-generation (i.e., digital) system.
Originally it meant a mobile phone using the 1900 MHz band, but that distinction
is rarely made now.
We will now describe GSM, since it is the dominant 2G system. In the next
section we will have more to say about CDMA when we describe 3G systems.
GSM—The Global System for Mobile Communications
GSM started life in the 1980s as an effort to produce a single European 2G
standard. The task was assigned to a telecommunications group called (in French)
Groupe Speciale´ Mobile. The first GSM systems were deployed starting in 1991
and were a quick success. It soon became clear that GSM was going to be more
than a European success, with uptake stretching to countries as far away as Australia,
so GSM was renamed to have a more worldwide appeal.The first generation of mobile phones was analog; the second generation is
digital. Switching to digital has several advantages. It provides capacity gains by
allowing voice signals to be digitized and compressed. It improves security by allowing
voice and control signals to be encrypted. This in turn deters fraud and
eavesdropping, whether from intentional scanning or echoes of other calls due to
RF propagation. Finally, it enables new services such as text messaging.
Just as there was no worldwide standardization during the first generation,
there was also no worldwide standardization during the second, either. Several
different systems were developed, and three have been widely deployed. DAMPS
(Digital Advanced Mobile Phone System) is a digital version of AMPS
that coexists with AMPS and uses TDM to place multiple calls on the same frequency
channel. It is described in International Standard IS-54 and its successor
IS-136. GSM (Global System for Mobile communications) has emerged as the
dominant system, and while it was slow to catch on in the U.S. it is now used virtually
everywhere in the world. Like D-AMPS, GSM is based on a mix of FDM
and TDM. CDMA (Code Division Multiple Access), described in International
Standard IS-95, is a completely different kind of system and is based on neither
FDM mor TDM. While CDMA has not become the dominant 2G system, its
technology has become the basis for 3G systems.
Also, the name PCS (Personal Communications Services) is sometimes
used in the marketing literature to indicate a second-generation (i.e., digital) system.
Originally it meant a mobile phone using the 1900 MHz band, but that distinction
is rarely made now.
We will now describe GSM, since it is the dominant 2G system. In the next
section we will have more to say about CDMA when we describe 3G systems.
GSM—The Global System for Mobile Communications
GSM started life in the 1980s as an effort to produce a single European 2G
standard. The task was assigned to a telecommunications group called (in French)
Groupe Speciale´ Mobile. The first GSM systems were deployed starting in 1991
and were a quick success. It soon became clear that GSM was going to be more
than a European success, with uptake stretching to countries as far away as Australia,
so GSM was renamed to have a more worldwide appeal.The first generation of mobile phones was analog; the second generation is
digital. Switching to digital has several advantages. It provides capacity gains by
allowing voice signals to be digitized and compressed. It improves security by allowing
voice and control signals to be encrypted. This in turn deters fraud and
eavesdropping, whether from intentional scanning or echoes of other calls due to
RF propagation. Finally, it enables new services such as text messaging.
Just as there was no worldwide standardization during the first generation,
there was also no worldwide standardization during the second, either. Several
different systems were developed, and three have been widely deployed. DAMPS
(Digital Advanced Mobile Phone System) is a digital version of AMPS
that coexists with AMPS and uses TDM to place multiple calls on the same frequency
channel. It is described in International Standard IS-54 and its successor
IS-136. GSM (Global System for Mobile communications) has emerged as the
dominant system, and while it was slow to catch on in the U.S. it is now used virtually
everywhere in the world. Like D-AMPS, GSM is based on a mix of FDM
and TDM. CDMA (Code Division Multiple Access), described in International
Standard IS-95, is a completely different kind of system and is based on neither
FDM mor TDM. While CDMA has not become the dominant 2G system, its
technology has become the basis for 3G systems.
Also, the name PCS (Personal Communications Services) is sometimes
used in the marketing literature to indicate a second-generation (i.e., digital) system.
Originally it meant a mobile phone using the 1900 MHz band, but that distinction
is rarely made now.
We will now describe GSM, since it is the dominant 2G system. In the next
section we will have more to say about CDMA when we describe 3G systems.
GSM—The Global System for Mobile Communications
GSM started life in the 1980s as an effort to produce a single European 2G
standard. The task was assigned to a telecommunications group called (in French)
Groupe Speciale´ Mobile. The first GSM systems were deployed starting in 1991
and were a quick success. It soon became clear that GSM was going to be more
than a European success, with uptake stretching to countries as far away as Australia,
so GSM was renamed to have a more worldwide appeal.The first generation of mobile phones was analog; the second generation is
digital. Switching to digital has several advantages. It provides capacity gains by
allowing voice signals to be digitized and compressed. It improves security by allowing
voice and control signals to be encrypted. This in turn deters fraud and
eavesdropping, whether from intentional scanning or echoes of other calls due to
RF propagation. Finally, it enables new services such as text messaging.
Just as there was no worldwide standardization during the first generation,
there was also no worldwide standardization during the second, either. Several
different systems were developed, and three have been widely deployed. DAMPS
(Digital Advanced Mobile Phone System) is a digital version of AMPS
that coexists with AMPS and uses TDM to place multiple calls on the same frequency
channel. It is described in International Standard IS-54 and its successor
IS-136. GSM (Global System for Mobile communications) has emerged as the
dominant system, and while it was slow to catch on in the U.S. it is now used virtually
everywhere in the world. Like D-AMPS, GSM is based on a mix of FDM
and TDM. CDMA (Code Division Multiple Access), described in International
Standard IS-95, is a completely different kind of system and is based on neither
FDM mor TDM. While CDMA has not become the dominant 2G system, its
technology has become the basis for 3G systems.
Also, the name PCS (Personal Communications Services) is sometimes
used in the marketing literature to indicate a second-generation (i.e., digital) system.
Originally it meant a mobile phone using the 1900 MHz band, but that distinction
is rarely made now.
We will now describe GSM, since it is the dominant 2G system. In the next
section we will have more to say about CDMA when we describe 3G systems.
GSM—The Global System for Mobile Communications
GSM started life in the 1980s as an effort to produce a single European 2G
standard. The task was assigned to a telecommunications group called (in French)
Groupe Speciale´ Mobile. The first GSM systems were deployed starting in 1991
and were a quick success. It soon became clear that GSM was going to be more
than a European success, with uptake stretching to countries as far away as Australia,
so GSM was renamed to have a more worldwide appeal.The first generation of mobile phones was analog; the second generation is
digital. Switching to digital has several advantages. It provides capacity gains by
allowing voice signals to be digitized and compressed. It improves security by allowing
voice and control signals to be encrypted. This in turn deters fraud and
eavesdropping, whether from intentional scanning or echoes of other calls due to
RF propagation. Finally, it enables new services such as text messaging.
Just as there was no worldwide standardization during the first generation,
there was also no worldwide standardization during the second, either. Several
different systems were developed, and three have been widely deployed. DAMPS
(Digital Advanced Mobile Phone System) is a digital version of AMPS
that coexists with AMPS and uses TDM to place multiple calls on the same frequency
channel. It is described in International Standard IS-54 and its successor
IS-136. GSM (Global System for Mobile communications) has emerged as the
dominant system, and while it was slow to catch on in the U.S. it is now used virtually
everywhere in the world. Like D-AMPS, GSM is based on a mix of FDM
and TDM. CDMA (Code Division Multiple Access), described in International
Standard IS-95, is a completely different kind of system and is based on neither
FDM mor TDM. While CDMA has not become the dominant 2G system, its
technology has become the basis for 3G systems.
Also, the name PCS (Personal Communications Services) is sometimes
used in the marketing literature to indicate a second-generation (i.e., digital) system.
Originally it meant a mobile phone using the 1900 MHz band, but that distinction
is rarely made now.
We will now describe GSM, since it is the dominant 2G system. In the next
section we will have more to say about CDMA when we describe 3G systems.
GSM—The Global System for Mobile Communications
GSM started life in the 1980s as an effort to produce a single European 2G
standard. The task was assigned to a telecommunications group called (in French)
Groupe Speciale´ Mobile. The first GSM systems were deployed starting in 1991
and were a quick success. It soon became clear that GSM was going to be more
than a European success, with uptake stretching to countries as far away as Australia,
so GSM was renamed to have a more worldwide appeal.The first generation of mobile phones was analog; the second generation is
digital. Switching to digital has several advantages. It provides capacity gains by
allowing voice signals to be digitized and compressed. It improves security by allowing
voice and control signals to be encrypted. This in turn deters fraud and
eavesdropping, whether from intentional scanning or echoes of other calls due to
RF propagation. Finally, it enables new services such as text messaging.
Just as there was no worldwide standardization during the first generation,
there was also no worldwide standardization during the second, either. Several
different systems were developed, and three have been widely deployed. DAMPS
(Digital Advanced Mobile Phone System) is a digital version of AMPS
that coexists with AMPS and uses TDM to place multiple calls on the same frequency
channel. It is described in International Standard IS-54 and its successor
IS-136. GSM (Global System for Mobile communications) has emerged as the
dominant system, and while it was slow to catch on in the U.S. it is now used virtually
everywhere in the world. Like D-AMPS, GSM is based on a mix of FDM
and TDM. CDMA (Code Division Multiple Access), described in International
Standard IS-95, is a completely different kind of system and is based on neither
FDM mor TDM. While CDMA has not become the dominant 2G system, its
technology has become the basis for 3G systems.
Also, the name PCS (Personal Communications Services) is sometimes
used in the marketing literature to indicate a second-generation (i.e., digital) system.
Originally it meant a mobile phone using the 1900 MHz band, but that distinction
is rarely made now.
We will now describe GSM, since it is the dominant 2G system. In the next
section we will have more to say about CDMA when we describe 3G systems.
GSM—The Global System for Mobile Communications
GSM started life in the 1980s as an effort to produce a single European 2G
standard. The task was assigned to a telecommunications group called (in French)
Groupe Speciale´ Mobile. The first GSM systems were deployed starting in 1991
and were a quick success. It soon became clear that GSM was going to be more
than a European success, with uptake stretching to countries as far away as Australia,
so GSM was renamed to have a more worldwide appeal.The first generation of mobile phones was analog; the second generation is
digital. Switching to digital has several advantages. It provides capacity gains by
allowing voice signals to be digitized and compressed. It improves security by allowing
voice and control signals to be encrypted. This in turn deters fraud and
eavesdropping, whether from intentional scanning or echoes of other calls due to
RF propagation. Finally, it enables new services such as text messaging.
Just as there was no worldwide standardization during the first generation,
there was also no worldwide standardization during the second, either. Several
different systems were developed, and three have been widely deployed. DAMPS
(Digital Advanced Mobile Phone System) is a digital version of AMPS
that coexists with AMPS and uses TDM to place multiple calls on the same frequency
channel. It is described in International Standard IS-54 and its successor
IS-136. GSM (Global System for Mobile communications) has emerged as the
dominant system, and while it was slow to catch on in the U.S. it is now used virtually
everywhere in the world. Like D-AMPS, GSM is based on a mix of FDM
and TDM. CDMA (Code Division Multiple Access), described in International
Standard IS-95, is a completely different kind of system and is based on neither
FDM mor TDM. While CDMA has not become the dominant 2G system, its
technology has become the basis for 3G systems.
Also, the name PCS (Personal Communications Services) is sometimes
used in the marketing literature to indicate a second-generation (i.e., digital) system.
Originally it meant a mobile phone using the 1900 MHz band, but that distinction
is rarely made now.
We will now describe GSM, since it is the dominant 2G system. In the next
section we will have more to say about CDMA when we describe 3G systems.
GSM—The Global System for Mobile Communications
GSM started life in the 1980s as an effort to produce a single European 2G
standard. The task was assigned to a telecommunications group called (in French)
Groupe Speciale´ Mobile. The first GSM systems were deployed starting in 1991
and were a quick success. It soon became clear that GSM was going to be more
than a European success, with uptake stretching to countries as far away as Australia,
so GSM was renamed to have a more worldwide appeal.The first generation of mobile phones was analog; the second generation is
digital. Switching to digital has several advantages. It provides capacity gains by
allowing voice signals to be digitized and compressed. It improves security by allowing
voice and control signals to be encrypted. This in turn deters fraud and
eavesdropping, whether from intentional scanning or echoes of other calls due to
RF propagation. Finally, it enables new services such as text messaging.
Just as there was no worldwide standardization during the first generation,
there was also no worldwide standardization during the second, either. Several
different systems were developed, and three have been widely deployed. DAMPS
(Digital Advanced Mobile Phone System) is a digital version of AMPS
that coexists with AMPS and uses TDM to place multiple calls on the same frequency
channel. It is described in International Standard IS-54 and its successor
IS-136. GSM (Global System for Mobile communications) has emerged as the
dominant system, and while it was slow to catch on in the U.S. it is now used virtually
everywhere in the world. Like D-AMPS, GSM is based on a mix of FDM
and TDM. CDMA (Code Division Multiple Access), described in International
Standard IS-95, is a completely different kind of system and is based on neither
FDM mor TDM. While CDMA has not become the dominant 2G system, its
technology has become the basis for 3G systems.
Also, the name PCS (Personal Communications Services) is sometimes
used in the marketing literature to indicate a second-generation (i.e., digital) system.
Originally it meant a mobile phone using the 1900 MHz band, but that distinction
is rarely made now.
We will now describe GSM, since it is the dominant 2G system. In the next
section we will have more to say about CDMA when we describe 3G systems.
GSM—The Global System for Mobile Communications
GSM started life in the 1980s as an effort to produce a single European 2G
standard. The task was assigned to a telecommunications group called (in French)
Groupe Speciale´ Mobile. The first GSM systems were deployed starting in 1991
and were a quick success. It soon became clear that GSM was going to be more
than a European success, with uptake stretching to countries as far away as Australia,
so GSM was renamed to have a more worldwide appeal.The first generation of mobile phones was analog; the second generation is
digital. Switching to digital has several advantages. It provides capacity gains by
allowing voice signals to be digitized and compressed. It improves security by allowing
voice and control signals to be encrypted. This in turn deters fraud and
eavesdropping, whether from intentional scanning or echoes of other calls due to
RF propagation. Finally, it enables new services such as text messaging.
Just as there was no worldwide standardization during the first generation,
there was also no worldwide standardization during the second, either. Several
different systems were developed, and three have been widely deployed. DAMPS
(Digital Advanced Mobile Phone System) is a digital version of AMPS
that coexists with AMPS and uses TDM to place multiple calls on the same frequency
channel. It is described in International Standard IS-54 and its successor
IS-136. GSM (Global System for Mobile communications) has emerged as the
dominant system, and while it was slow to catch on in the U.S. it is now used virtually
everywhere in the world. Like D-AMPS, GSM is based on a mix of FDM
and TDM. CDMA (Code Division Multiple Access), described in International
Standard IS-95, is a completely different kind of system and is based on neither
FDM mor TDM. While CDMA has not become the dominant 2G system, its
technology has become the basis for 3G systems.
Also, the name PCS (Personal Communications Services) is sometimes
used in the marketing literature to indicate a second-generation (i.e., digital) system.
Originally it meant a mobile phone using the 1900 MHz band, but that distinction
is rarely made now.
We will now describe GSM, since it is the dominant 2G system. In the next
section we will have more to say about CDMA when we describe 3G systems.
GSM—The Global System for Mobile Communications
GSM started life in the 1980s as an effort to produce a single European 2G
standard. The task was assigned to a telecommunications group called (in French)
Groupe Speciale´ Mobile. The first GSM systems were deployed starting in 1991
and were a quick success. It soon became clear that GSM was going to be more
than a European success, with uptake stretching to countries as far away as Australia,
so GSM was renamed to have a more worldwide appeal.The first generation of mobile phones was analog; the second generation is
digital. Switching to digital has several advantages. It provides capacity gains by
allowing voice signals to be digitized and compressed. It improves security by allowing
voice and control signals to be encrypted. This in turn deters fraud and
eavesdropping, whether from intentional scanning or echoes of other calls due to
RF propagation. Finally, it enables new services such as text messaging.
Just as there was no worldwide standardization during the first generation,
there was also no worldwide standardization during the second, either. Several
different systems were developed, and three have been widely deployed. DAMPS
(Digital Advanced Mobile Phone System) is a digital version of AMPS
that coexists with AMPS and uses TDM to place multiple calls on the same frequency
channel. It is described in International Standard IS-54 and its successor
IS-136. GSM (Global System for Mobile communications) has emerged as the
dominant system, and while it was slow to catch on in the U.S. it is now used virtually
everywhere in the world. Like D-AMPS, GSM is based on a mix of FDM
and TDM. CDMA (Code Division Multiple Access), described in International
Standard IS-95, is a completely different kind of system and is based on neither
FDM mor TDM. While CDMA has not become the dominant 2G system, its
technology has become the basis for 3G systems.
Also, the name PCS (Personal Communications Services) is sometimes
used in the marketing literature to indicate a second-generation (i.e., digital) system.
Originally it meant a mobile phone using the 1900 MHz band, but that distinction
is rarely made now.
We will now describe GSM, since it is the dominant 2G system. In the next
section we will have more to say about CDMA when we describe 3G systems.
GSM—The Global System for Mobile Communications
GSM started life in the 1980s as an effort to produce a single European 2G
standard. The task was assigned to a telecommunications group called (in French)
Groupe Speciale´ Mobile. The first GSM systems were deployed starting in 1991
and were a quick success. It soon became clear that GSM was going to be more
than a European success, with uptake stretching to countries as far away as Australia,
so GSM was renamed to have a more worldwide appeal.The first generation of mobile phones was analog; the second generation is
digital. Switching to digital has several advantages. It provides capacity gains by
allowing voice signals to be digitized and compressed. It improves security by allowing
voice and control signals to be encrypted. This in turn deters fraud and
eavesdropping, whether from intentional scanning or echoes of other calls due to
RF propagation. Finally, it enables new services such as text messaging.
Just as there was no worldwide standardization during the first generation,
there was also no worldwide standardization during the second, either. Several
different systems were developed, and three have been widely deployed. DAMPS
(Digital Advanced Mobile Phone System) is a digital version of AMPS
that coexists with AMPS and uses TDM to place multiple calls on the same frequency
channel. It is described in International Standard IS-54 and its successor
IS-136. GSM (Global System for Mobile communications) has emerged as the
dominant system, and while it was slow to catch on in the U.S. it is now used virtually
everywhere in the world. Like D-AMPS, GSM is based on a mix of FDM
and TDM. CDMA (Code Division Multiple Access), described in International
Standard IS-95, is a completely different kind of system and is based on neither
FDM mor TDM. While CDMA has not become the dominant 2G system, its
technology has become the basis for 3G systems.
Also, the name PCS (Personal Communications Services) is sometimes
used in the marketing literature to indicate a second-generation (i.e., digital) system.
Originally it meant a mobile phone using the 1900 MHz band, but that distinction
is rarely made now.
We will now describe GSM, since it is the dominant 2G system. In the next
section we will have more to say about CDMA when we describe 3G systems.
GSM—The Global System for Mobile Communications
GSM started life in the 1980s as an effort to produce a single European 2G
standard. The task was assigned to a telecommunications group called (in French)
Groupe Speciale´ Mobile. The first GSM systems were deployed starting in 1991
and were a quick success. It soon became clear that GSM was going to be more
than a European success, with uptake stretching to countries as far away as Australia,
so GSM was renamed to have a more worldwide appeal.The first generation of mobile phones was analog; the second generation is
digital. Switching to digital has several advantages. It provides capacity gains by
allowing voice signals to be digitized and compressed. It improves security by allowing
voice and control signals to be encrypted. This in turn deters fraud and
eavesdropping, whether from intentional scanning or echoes of other calls due to
RF propagation. Finally, it enables new services such as text messaging.
Just as there was no worldwide standardization during the first generation,
there was also no worldwide standardization during the second, either. Several
different systems were developed, and three have been widely deployed. DAMPS
(Digital Advanced Mobile Phone System) is a digital version of AMPS
that coexists with AMPS and uses TDM to place multiple calls on the same frequency
channel. It is described in International Standard IS-54 and its successor
IS-136. GSM (Global System for Mobile communications) has emerged as the
dominant system, and while it was slow to catch on in the U.S. it is now used virtually
everywhere in the world. Like D-AMPS, GSM is based on a mix of FDM
and TDM. CDMA (Code Division Multiple Access), described in International
Standard IS-95, is a completely different kind of system and is based on neither
FDM mor TDM. While CDMA has not become the dominant 2G system, its
technology has become the basis for 3G systems.
Also, the name PCS (Personal Communications Services) is sometimes
used in the marketing literature to indicate a second-generation (i.e., digital) system.
Originally it meant a mobile phone using the 1900 MHz band, but that distinction
is rarely made now.
We will now describe GSM, since it is the dominant 2G system. In the next
section we will have more to say about CDMA when we describe 3G systems.
GSM—The Global System for Mobile Communications
GSM started life in the 1980s as an effort to produce a single European 2G
standard. The task was assigned to a telecommunications group called (in French)
Groupe Speciale´ Mobile. The first GSM systems were deployed starting in 1991
and were a quick success. It soon became clear that GSM was going to be more
than a European success, with uptake stretching to countries as far away as Australia,
so GSM was renamed to have a more worldwide appeal.The first generation of mobile phones was analog; the second generation is
digital. Switching to digital has several advantages. It provides capacity gains by
allowing voice signals to be digitized and compressed. It improves security by allowing
voice and control signals to be encrypted. This in turn deters fraud and
eavesdropping, whether from intentional scanning or echoes of other calls due to
RF propagation. Finally, it enables new services such as text messaging.
Just as there was no worldwide standardization during the first generation,
there was also no worldwide standardization during the second, either. Several
different systems were developed, and three have been widely deployed. DAMPS
(Digital Advanced Mobile Phone System) is a digital version of AMPS
that coexists with AMPS and uses TDM to place multiple calls on the same frequency
channel. It is described in International Standard IS-54 and its successor
IS-136. GSM (Global System for Mobile communications) has emerged as the
dominant system, and while it was slow to catch on in the U.S. it is now used virtually
everywhere in the world. Like D-AMPS, GSM is based on a mix of FDM
and TDM. CDMA (Code Division Multiple Access), described in International
Standard IS-95, is a completely different kind of system and is based on neither
FDM mor TDM. While CDMA has not become the dominant 2G system, its
technology has become the basis for 3G systems.
Also, the name PCS (Personal Communications Services) is sometimes
used in the marketing literature to indicate a second-generation (i.e., digital) system.
Originally it meant a mobile phone using the 1900 MHz band, but that distinction
is rarely made now.
We will now describe GSM, since it is the dominant 2G system. In the next
section we will have more to say about CDMA when we describe 3G systems.
GSM—The Global System for Mobile Communications
GSM started life in the 1980s as an effort to produce a single European 2G
standard. The task was assigned to a telecommunications group called (in French)
Groupe Speciale´ Mobile. The first GSM systems were deployed starting in 1991
and were a quick success. It soon became clear that GSM was going to be more
than a European success, with uptake stretching to countries as far away as Australia,
so GSM was renamed to have a more worldwide appeal.The first generation of mobile phones was analog; the second generation is
digital. Switching to digital has several advantages. It provides capacity gains by
allowing voice signals to be digitized and compressed. It improves security by allowing
voice and control signals to be encrypted. This in turn deters fraud and
eavesdropping, whether from intentional scanning or echoes of other calls due to
RF propagation. Finally, it enables new services such as text messaging.
Just as there was no worldwide standardization during the first generation,
there was also no worldwide standardization during the second, either. Several
different systems were developed, and three have been widely deployed. DAMPS
(Digital Advanced Mobile Phone System) is a digital version of AMPS
that coexists with AMPS and uses TDM to place multiple calls on the same frequency
channel. It is described in International Standard IS-54 and its successor
IS-136. GSM (Global System for Mobile communications) has emerged as the
dominant system, and while it was slow to catch on in the U.S. it is now used virtually
everywhere in the world. Like D-AMPS, GSM is based on a mix of FDM
and TDM. CDMA (Code Division Multiple Access), described in International
Standard IS-95, is a completely different kind of system and is based on neither
FDM mor TDM. While CDMA has not become the dominant 2G system, its
technology has become the basis for 3G systems.
Also, the name PCS (Personal Communications Services) is sometimes
used in the marketing literature to indicate a second-generation (i.e., digital) system.
Originally it meant a mobile phone using the 1900 MHz band, but that distinction
is rarely made now.
We will now describe GSM, since it is the dominant 2G system. In the next
section we will have more to say about CDMA when we describe 3G systems.
GSM—The Global System for Mobile Communications
GSM started life in the 1980s as an effort to produce a single European 2G
standard. The task was assigned to a telecommunications group called (in French)
Groupe Speciale´ Mobile. The first GSM systems were deployed starting in 1991
and were a quick success. It soon became clear that GSM was going to be more
than a European success, with uptake stretching to countries as far away as Australia,
so GSM was renamed to have a more worldwide appeal.The first generation of mobile phones was analog; the second generation is
digital. Switching to digital has several advantages. It provides capacity gains by
allowing voice signals to be digitized and compressed. It improves security by allowing
voice and control signals to be encrypted. This in turn deters fraud and
eavesdropping, whether from intentional scanning or echoes of other calls due to
RF propagation. Finally, it enables new services such as text messaging.
Just as there was no worldwide standardization during the first generation,
there was also no worldwide standardization during the second, either. Several
different systems were developed, and three have been widely deployed. DAMPS
(Digital Advanced Mobile Phone System) is a digital version of AMPS
that coexists with AMPS and uses TDM to place multiple calls on the same frequency
channel. It is described in International Standard IS-54 and its successor
IS-136. GSM (Global System for Mobile communications) has emerged as the
dominant system, and while it was slow to catch on in the U.S. it is now used virtually
everywhere in the world. Like D-AMPS, GSM is based on a mix of FDM
and TDM. CDMA (Code Division Multiple Access), described in International
Standard IS-95, is a completely different kind of system and is based on neither
FDM mor TDM. While CDMA has not become the dominant 2G system, its
technology has become the basis for 3G systems.
Also, the name PCS (Personal Communications Services) is sometimes
used in the marketing literature to indicate a second-generation (i.e., digital) system.
Originally it meant a mobile phone using the 1900 MHz band, but that distinction
is rarely made now.
We will now describe GSM, since it is the dominant 2G system. In the next
section we will have more to say about CDMA when we describe 3G systems.
GSM—The Global System for Mobile Communications
GSM started life in the 1980s as an effort to produce a single European 2G
standard. The task was assigned to a telecommunications group called (in French)
Groupe Speciale´ Mobile. The first GSM systems were deployed starting in 1991
and were a quick success. It soon became clear that GSM was going to be more
than a European success, with uptake stretching to countries as far away as Australia,
so GSM was renamed to have a more worldwide appeal.The first generation of mobile phones was analog; the second generation is
digital. Switching to digital has several advantages. It provides capacity gains by
allowing voice signals to be digitized and compressed. It improves security by allowing
voice and control signals to be encrypted. This in turn deters fraud and
eavesdropping, whether from intentional scanning or echoes of other calls due to
RF propagation. Finally, it enables new services such as text messaging.
Just as there was no worldwide standardization during the first generation,
there was also no worldwide standardization during the second, either. Several
different systems were developed, and three have been widely deployed. DAMPS
(Digital Advanced Mobile Phone System) is a digital version of AMPS
that coexists with AMPS and uses TDM to place multiple calls on the same frequency
channel. It is described in International Standard IS-54 and its successor
IS-136. GSM (Global System for Mobile communications) has emerged as the
dominant system, and while it was slow to catch on in the U.S. it is now used virtually
everywhere in the world. Like D-AMPS, GSM is based on a mix of FDM
and TDM. CDMA (Code Division Multiple Access), described in International
Standard IS-95, is a completely different kind of system and is based on neither
FDM mor TDM. While CDMA has not become the dominant 2G system, its
technology has become the basis for 3G systems.
Also, the name PCS (Personal Communications Services) is sometimes
used in the marketing literature to indicate a second-generation (i.e., digital) system.
Originally it meant a mobile phone using the 1900 MHz band, but that distinction
is rarely made now.
We will now describe GSM, since it is the dominant 2G system. In the next
section we will have more to say about CDMA when we describe 3G systems.
GSM—The Global System for Mobile Communications
GSM started life in the 1980s as an effort to produce a single European 2G
standard. The task was assigned to a telecommunications group called (in French)
Groupe Speciale´ Mobile. The first GSM systems were deployed starting in 1991
and were a quick success. It soon became clear that GSM was going to be more
than a European success, with uptake stretching to countries as far away as Australia,
so GSM was renamed to have a more worldwide appeal.The first generation of mobile phones was analog; the second generation is
digital. Switching to digital has several advantages. It provides capacity gains by
allowing voice signals to be digitized and compressed. It improves security by allowing
voice and control signals to be encrypted. This in turn deters fraud and
eavesdropping, whether from intentional scanning or echoes of other calls due to
RF propagation. Finally, it enables new services such as text messaging.
Just as there was no worldwide standardization during the first generation,
there was also no worldwide standardization during the second, either. Several
different systems were developed, and three have been widely deployed. DAMPS
(Digital Advanced Mobile Phone System) is a digital version of AMPS
that coexists with AMPS and uses TDM to place multiple calls on the same frequency
channel. It is described in International Standard IS-54 and its successor
IS-136. GSM (Global System for Mobile communications) has emerged as the
dominant system, and while it was slow to catch on in the U.S. it is now used virtually
everywhere in the world. Like D-AMPS, GSM is based on a mix of FDM
and TDM. CDMA (Code Division Multiple Access), described in International
Standard IS-95, is a completely different kind of system and is based on neither
FDM mor TDM. While CDMA has not become the dominant 2G system, its
technology has become the basis for 3G systems.
Also, the name PCS (Personal Communications Services) is sometimes
used in the marketing literature to indicate a second-generation (i.e., digital) system.
Originally it meant a mobile phone using the 1900 MHz band, but that distinction
is rarely made now.
We will now describe GSM, since it is the dominant 2G system. In the next
section we will have more to say about CDMA when we describe 3G systems.
GSM—The Global System for Mobile Communications
GSM started life in the 1980s as an effort to produce a single European 2G
standard. The task was assigned to a telecommunications group called (in French)
Groupe Speciale´ Mobile. The first GSM systems were deployed starting in 1991
and were a quick success. It soon became clear that GSM was going to be more
than a European success, with uptake stretching to countries as far away as Australia,
so GSM was renamed to have a more worldwide appeal.The first generation of mobile phones was analog; the second generation is
digital. Switching to digital has several advantages. It provides capacity gains by
allowing voice signals to be digitized and compressed. It improves security by allowing
voice and control signals to be encrypted. This in turn deters fraud and
eavesdropping, whether from intentional scanning or echoes of other calls due to
RF propagation. Finally, it enables new services such as text messaging.
Just as there was no worldwide standardization during the first generation,
there was also no worldwide standardization during the second, either. Several
different systems were developed, and three have been widely deployed. DAMPS
(Digital Advanced Mobile Phone System) is a digital version of AMPS
that coexists with AMPS and uses TDM to place multiple calls on the same frequency
channel. It is described in International Standard IS-54 and its successor
IS-136. GSM (Global System for Mobile communications) has emerged as the
dominant system, and while it was slow to catch on in the U.S. it is now used virtually
everywhere in the world. Like D-AMPS, GSM is based on a mix of FDM
and TDM. CDMA (Code Division Multiple Access), described in International
Standard IS-95, is a completely different kind of system and is based on neither
FDM mor TDM. While CDMA has not become the dominant 2G system, its
technology has become the basis for 3G systems.
Also, the name PCS (Personal Communications Services) is sometimes
used in the marketing literature to indicate a second-generation (i.e., digital) system.
Originally it meant a mobile phone using the 1900 MHz band, but that distinction
is rarely made now.
We will now describe GSM, since it is the dominant 2G system. In the next
section we will have more to say about CDMA when we describe 3G systems.
GSM—The Global System for Mobile Communications
GSM started life in the 1980s as an effort to produce a single European 2G
standard. The task was assigned to a telecommunications group called (in French)
Groupe Speciale´ Mobile. The first GSM systems were deployed starting in 1991
and were a quick success. It soon became clear that GSM was going to be more
than a European success, with uptake stretching to countries as far away as Australia,
so GSM was renamed to have a more worldwide appeal.The first generation of mobile phones was analog; the second generation is
digital. Switching to digital has several advantages. It provides capacity gains by
allowing voice signals to be digitized and compressed. It improves security by allowing
voice and control signals to be encrypted. This in turn deters fraud and
eavesdropping, whether from intentional scanning or echoes of other calls due to
RF propagation. Finally, it enables new services such as text messaging.
Just as there was no worldwide standardization during the first generation,
there was also no worldwide standardization during the second, either. Several
different systems were developed, and three have been widely deployed. DAMPS
(Digital Advanced Mobile Phone System) is a digital version of AMPS
that coexists with AMPS and uses TDM to place multiple calls on the same frequency
channel. It is described in International Standard IS-54 and its successor
IS-136. GSM (Global System for Mobile communications) has emerged as the
dominant system, and while it was slow to catch on in the U.S. it is now used virtually
everywhere in the world. Like D-AMPS, GSM is based on a mix of FDM
and TDM. CDMA (Code Division Multiple Access), described in International
Standard IS-95, is a completely different kind of system and is based on neither
FDM mor TDM. While CDMA has not become the dominant 2G system, its
technology has become the basis for 3G systems.
Also, the name PCS (Personal Communications Services) is sometimes
used in the marketing literature to indicate a second-generation (i.e., digital) system.
Originally it meant a mobile phone using the 1900 MHz band, but that distinction
is rarely made now.
We will now describe GSM, since it is the dominant 2G system. In the next
section we will have more to say about CDMA when we describe 3G systems.
GSM—The Global System for Mobile Communications
GSM started life in the 1980s as an effort to produce a single European 2G
standard. The task was assigned to a telecommunications group called (in French)
Groupe Speciale´ Mobile. The first GSM systems were deployed starting in 1991
and were a quick success. It soon became clear that GSM was going to be more
than a European success, with uptake stretching to countries as far away as Australia,
so GSM was renamed to have a more worldwide appeal.The first generation of mobile phones was analog; the second generation is
digital. Switching to digital has several advantages. It provides capacity gains by
allowing voice signals to be digitized and compressed. It improves security by allowing
voice and control signals to be encrypted. This in turn deters fraud and
eavesdropping, whether from intentional scanning or echoes of other calls due to
RF propagation. Finally, it enables new services such as text messaging.
Just as there was no worldwide standardization during the first generation,
there was also no worldwide standardization during the second, either. Several
different systems were developed, and three have been widely deployed. DAMPS
(Digital Advanced Mobile Phone System) is a digital version of AMPS
that coexists with AMPS and uses TDM to place multiple calls on the same frequency
channel. It is described in International Standard IS-54 and its successor
IS-136. GSM (Global System for Mobile communications) has emerged as the
dominant system, and while it was slow to catch on in the U.S. it is now used virtually
everywhere in the world. Like D-AMPS, GSM is based on a mix of FDM
and TDM. CDMA (Code Division Multiple Access), described in International
Standard IS-95, is a completely different kind of system and is based on neither
FDM mor TDM. While CDMA has not become the dominant 2G system, its
technology has become the basis for 3G systems.
Also, the name PCS (Personal Communications Services) is sometimes
used in the marketing literature to indicate a second-generation (i.e., digital) system.
Originally it meant a mobile phone using the 1900 MHz band, but that distinction
is rarely made now.
We will now describe GSM, since it is the dominant 2G system. In the next
section we will have more to say about CDMA when we describe 3G systems.
GSM—The Global System for Mobile Communications
GSM started life in the 1980s as an effort to produce a single European 2G
standard. The task was assigned to a telecommunications group called (in French)
Groupe Speciale´ Mobile. The first GSM systems were deployed starting in 1991
and were a quick success. It soon became clear that GSM was going to be more
than a European success, with uptake stretching to countries as far away as Australia,
so GSM was renamed to have a more worldwide appeal.The first generation of mobile phones was analog; the second generation is
digital. Switching to digital has several advantages. It provides capacity gains by
allowing voice signals to be digitized and compressed. It improves security by allowing
voice and control signals to be encrypted. This in turn deters fraud and
eavesdropping, whether from intentional scanning or echoes of other calls due to
RF propagation. Finally, it enables new services such as text messaging.
Just as there was no worldwide standardization during the first generation,
there was also no worldwide standardization during the second, either. Several
different systems were developed, and three have been widely deployed. DAMPS
(Digital Advanced Mobile Phone System) is a digital version of AMPS
that coexists with AMPS and uses TDM to place multiple calls on the same frequency
channel. It is described in International Standard IS-54 and its successor
IS-136. GSM (Global System for Mobile communications) has emerged as the
dominant system, and while it was slow to catch on in the U.S. it is now used virtually
everywhere in the world. Like D-AMPS, GSM is based on a mix of FDM
and TDM. CDMA (Code Division Multiple Access), described in International
Standard IS-95, is a completely different kind of system and is based on neither
FDM mor TDM. While CDMA has not become the dominant 2G system, its
technology has become the basis for 3G systems.
Also, the name PCS (Personal Communications Services) is sometimes
used in the marketing literature to indicate a second-generation (i.e., digital) system.
Originally it meant a mobile phone using the 1900 MHz band, but that distinction
is rarely made now.
We will now describe GSM, since it is the dominant 2G system. In the next
section we will have more to say about CDMA when we describe 3G systems.
GSM—The Global System for Mobile Communications
GSM started life in the 1980s as an effort to produce a single European 2G
standard. The task was assigned to a telecommunications group called (in French)
Groupe Speciale´ Mobile. The first GSM systems were deployed starting in 1991
and were a quick success. It soon became clear that GSM was going to be more
than a European success, with uptake stretching to countries as far away as Australia,
so GSM was renamed to have a more worldwide appeal.The first generation of mobile phones was analog; the second generation is
digital. Switching to digital has several advantages. It provides capacity gains by
allowing voice signals to be digitized and compressed. It improves security by allowing
voice and control signals to be encrypted. This in turn deters fraud and
eavesdropping, whether from intentional scanning or echoes of other calls due to
RF propagation. Finally, it enables new services such as text messaging.
Just as there was no worldwide standardization during the first generation,
there was also no worldwide standardization during the second, either. Several
different systems were developed, and three have been widely deployed. DAMPS
(Digital Advanced Mobile Phone System) is a digital version of AMPS
that coexists with AMPS and uses TDM to place multiple calls on the same frequency
channel. It is described in International Standard IS-54 and its successor
IS-136. GSM (Global System for Mobile communications) has emerged as the
dominant system, and while it was slow to catch on in the U.S. it is now used virtually
everywhere in the world. Like D-AMPS, GSM is based on a mix of FDM
and TDM. CDMA (Code Division Multiple Access), described in International
Standard IS-95, is a completely different kind of system and is based on neither
FDM mor TDM. While CDMA has not become the dominant 2G system, its
technology has become the basis for 3G systems.
Also, the name PCS (Personal Communications Services) is sometimes
used in the marketing literature to indicate a second-generation (i.e., digital) system.
Originally it meant a mobile phone using the 1900 MHz band, but that distinction
is rarely made now.
We will now describe GSM, since it is the dominant 2G system. In the next
section we will have more to say about CDMA when we describe 3G systems.
GSM—The Global System for Mobile Communications
GSM started life in the 1980s as an effort to produce a single European 2G
standard. The task was assigned to a telecommunications group called (in French)
Groupe Speciale´ Mobile. The first GSM systems were deployed starting in 1991
and were a quick success. It soon became clear that GSM was going to be more
than a European success, with uptake stretching to countries as far away as Australia,
so GSM was renamed to have a more worldwide appeal.The first generation of mobile phones was analog; the second generation is
digital. Switching to digital has several advantages. It provides capacity gains by
allowing voice signals to be digitized and compressed. It improves security by allowing
voice and control signals to be encrypted. This in turn deters fraud and
eavesdropping, whether from intentional scanning or echoes of other calls due to
RF propagation. Finally, it enables new services such as text messaging.
Just as there was no worldwide standardization during the first generation,
there was also no worldwide standardization during the second, either. Several
different systems were developed, and three have been widely deployed. DAMPS
(Digital Advanced Mobile Phone System) is a digital version of AMPS
that coexists with AMPS and uses TDM to place multiple calls on the same frequency
channel. It is described in International Standard IS-54 and its successor
IS-136. GSM (Global System for Mobile communications) has emerged as the
dominant system, and while it was slow to catch on in the U.S. it is now used virtually
everywhere in the world. Like D-AMPS, GSM is based on a mix of FDM
and TDM. CDMA (Code Division Multiple Access), described in International
Standard IS-95, is a completely different kind of system and is based on neither
FDM mor TDM. While CDMA has not become the dominant 2G system, its
technology has become the basis for 3G systems.
Also, the name PCS (Personal Communications Services) is sometimes
used in the marketing literature to indicate a second-generation (i.e., digital) system.
Originally it meant a mobile phone using the 1900 MHz band, but that distinction
is rarely made now.
We will now describe GSM, since it is the dominant 2G system. In the next
section we will have more to say about CDMA when we describe 3G systems.
GSM—The Global System for Mobile Communications
GSM started life in the 1980s as an effort to produce a single European 2G
standard. The task was assigned to a telecommunications group called (in French)
Groupe Speciale´ Mobile. The first GSM systems were deployed starting in 1991
and were a quick success. It soon became clear that GSM was going to be more
than a European success, with uptake stretching to countries as far away as Australia,
so GSM was renamed to have a more worldwide appeal.The first generation of mobile phones was analog; the second generation is
digital. Switching to digital has several advantages. It provides capacity gains by
allowing voice signals to be digitized and compressed. It improves security by allowing
voice and control signals to be encrypted. This in turn deters fraud and
eavesdropping, whether from intentional scanning or echoes of other calls due to
RF propagation. Finally, it enables new services such as text messaging.
Just as there was no worldwide standardization during the first generation,
there was also no worldwide standardization during the second, either. Several
different systems were developed, and three have been widely deployed. DAMPS
(Digital Advanced Mobile Phone System) is a digital version of AMPS
that coexists with AMPS and uses TDM to place multiple calls on the same frequency
channel. It is described in International Standard IS-54 and its successor
IS-136. GSM (Global System for Mobile communications) has emerged as the
dominant system, and while it was slow to catch on in the U.S. it is now used virtually
everywhere in the world. Like D-AMPS, GSM is based on a mix of FDM
and TDM. CDMA (Code Division Multiple Access), described in International
Standard IS-95, is a completely different kind of system and is based on neither
FDM mor TDM. While CDMA has not become the dominant 2G system, its
technology has become the basis for 3G systems.
Also, the name PCS (Personal Communications Services) is sometimes
used in the marketing literature to indicate a second-generation (i.e., digital) system.
Originally it meant a mobile phone using the 1900 MHz band, but that distinction
is rarely made now.
We will now describe GSM, since it is the dominant 2G system. In the next
section we will have more to say about CDMA when we describe 3G systems.
GSM—The Global System for Mobile Communications
GSM started life in the 1980s as an effort to produce a single European 2G
standard. The task was assigned to a telecommunications group called (in French)
Groupe Speciale´ Mobile. The first GSM systems were deployed starting in 1991
and were a quick success. It soon became clear that GSM was going to be more
than a European success, with uptake stretching to countries as far away as Australia,
so GSM was renamed to have a more worldwide appeal.The first generation of mobile phones was analog; the second generation is
digital. Switching to digital has several advantages. It provides capacity gains by
allowing voice signals to be digitized and compressed. It improves security by allowing
voice and control signals to be encrypted. This in turn deters fraud and
eavesdropping, whether from intentional scanning or echoes of other calls due to
RF propagation. Finally, it enables new services such as text messaging.
Just as there was no worldwide standardization during the first generation,
there was also no worldwide standardization during the second, either. Several
different systems were developed, and three have been widely deployed. DAMPS
(Digital Advanced Mobile Phone System) is a digital version of AMPS
that coexists with AMPS and uses TDM to place multiple calls on the same frequency
channel. It is described in International Standard IS-54 and its successor
IS-136. GSM (Global System for Mobile communications) has emerged as the
dominant system, and while it was slow to catch on in the U.S. it is now used virtually
everywhere in the world. Like D-AMPS, GSM is based on a mix of FDM
and TDM. CDMA (Code Division Multiple Access), described in International
Standard IS-95, is a completely different kind of system and is based on neither
FDM mor TDM. While CDMA has not become the dominant 2G system, its
technology has become the basis for 3G systems.
Also, the name PCS (Personal Communications Services) is sometimes
used in the marketing literature to indicate a second-generation (i.e., digital) system.
Originally it meant a mobile phone using the 1900 MHz band, but that distinction
is rarely made now.
We will now describe GSM, since it is the dominant 2G system. In the next
section we will have more to say about CDMA when we describe 3G systems.
GSM—The Global System for Mobile Communications
GSM started life in the 1980s as an effort to produce a single European 2G
standard. The task was assigned to a telecommunications group called (in French)
Groupe Speciale´ Mobile. The first GSM systems were deployed starting in 1991
and were a quick success. It soon became clear that GSM was going to be more
than a European success, with uptake stretching to countries as far away as Australia,
so GSM was renamed to have a more worldwide appeal.The first generation of mobile phones was analog; the second generation is
digital. Switching to digital has several advantages. It provides capacity gains by
allowing voice signals to be digitized and compressed. It improves security by allowing
voice and control signals to be encrypted. This in turn deters fraud and
eavesdropping, whether from intentional scanning or echoes of other calls due to
RF propagation. Finally, it enables new services such as text messaging.
Just as there was no worldwide standardization during the first generation,
there was also no worldwide standardization during the second, either. Several
different systems were developed, and three have been widely deployed. DAMPS
(Digital Advanced Mobile Phone System) is a digital version of AMPS
that coexists with AMPS and uses TDM to place multiple calls on the same frequency
channel. It is described in International Standard IS-54 and its successor
IS-136. GSM (Global System for Mobile communications) has emerged as the
dominant system, and while it was slow to catch on in the U.S. it is now used virtually
everywhere in the world. Like D-AMPS, GSM is based on a mix of FDM
and TDM. CDMA (Code Division Multiple Access), described in International
Standard IS-95, is a completely different kind of system and is based on neither
FDM mor TDM. While CDMA has not become the dominant 2G system, its
technology has become the basis for 3G systems.
Also, the name PCS (Personal Communications Services) is sometimes
used in the marketing literature to indicate a second-generation (i.e., digital) system.
Originally it meant a mobile phone using the 1900 MHz band, but that distinction
is rarely made now.
We will now describe GSM, since it is the dominant 2G system. In the next
section we will have more to say about CDMA when we describe 3G systems.
GSM—The Global System for Mobile Communications
GSM started life in the 1980s as an effort to produce a single European 2G
standard. The task was assigned to a telecommunications group called (in French)
Groupe Speciale´ Mobile. The first GSM systems were deployed starting in 1991
and were a quick success. It soon became clear that GSM was going to be more
than a European success, with uptake stretching to countries as far away as Australia,
so GSM was renamed to have a more worldwide appeal.The first generation of mobile phones was analog; the second generation is
digital. Switching to digital has several advantages. It provides capacity gains by
allowing voice signals to be digitized and compressed. It improves security by allowing
voice and control signals to be encrypted. This in turn deters fraud and
eavesdropping, whether from intentional scanning or echoes of other calls due to
RF propagation. Finally, it enables new services such as text messaging.
Just as there was no worldwide standardization during the first generation,
there was also no worldwide standardization during the second, either. Several
different systems were developed, and three have been widely deployed. DAMPS
(Digital Advanced Mobile Phone System) is a digital version of AMPS
that coexists with AMPS and uses TDM to place multiple calls on the same frequency
channel. It is described in International Standard IS-54 and its successor
IS-136. GSM (Global System for Mobile communications) has emerged as the
dominant system, and while it was slow to catch on in the U.S. it is now used virtually
everywhere in the world. Like D-AMPS, GSM is based on a mix of FDM
and TDM. CDMA (Code Division Multiple Access), described in International
Standard IS-95, is a completely different kind of system and is based on neither
FDM mor TDM. While CDMA has not become the dominant 2G system, its
technology has become the basis for 3G systems.
Also, the name PCS (Personal Communications Services) is sometimes
used in the marketing literature to indicate a second-generation (i.e., digital) system.
Originally it meant a mobile phone using the 1900 MHz band, but that distinction
is rarely made now.
We will now describe GSM, since it is the dominant 2G system. In the next
section we will have more to say about CDMA when we describe 3G systems.
GSM—The Global System for Mobile Communications
GSM started life in the 1980s as an effort to produce a single European 2G
standard. The task was assigned to a telecommunications group called (in French)
Groupe Speciale´ Mobile. The first GSM systems were deployed starting in 1991
and were a quick success. It soon became clear that GSM was going to be more
than a European success, with uptake stretching to countries as far away as Australia,
so GSM was renamed to have a more worldwide appeal.The first generation of mobile phones was analog; the second generation is
digital. Switching to digital has several advantages. It provides capacity gains by
allowing voice signals to be digitized and compressed. It improves security by allowing
voice and control signals to be encrypted. This in turn deters fraud and
eavesdropping, whether from intentional scanning or echoes of other calls due to
RF propagation. Finally, it enables new services such as text messaging.
Just as there was no worldwide standardization during the first generation,
there was also no worldwide standardization during the second, either. Several
different systems were developed, and three have been widely deployed. DAMPS
(Digital Advanced Mobile Phone System) is a digital version of AMPS
that coexists with AMPS and uses TDM to place multiple calls on the same frequency
channel. It is described in International Standard IS-54 and its successor
IS-136. GSM (Global System for Mobile communications) has emerged as the
dominant system, and while it was slow to catch on in the U.S. it is now used virtually
everywhere in the world. Like D-AMPS, GSM is based on a mix of FDM
and TDM. CDMA (Code Division Multiple Access), described in International
Standard IS-95, is a completely different kind of system and is based on neither
FDM mor TDM. While CDMA has not become the dominant 2G system, its
technology has become the basis for 3G systems.
Also, the name PCS (Personal Communications Services) is sometimes
used in the marketing literature to indicate a second-generation (i.e., digital) system.
Originally it meant a mobile phone using the 1900 MHz band, but that distinction
is rarely made now.
We will now describe GSM, since it is the dominant 2G system. In the next
section we will have more to say about CDMA when we describe 3G systems.
GSM—The Global System for Mobile Communications
GSM started life in the 1980s as an effort to produce a single European 2G
standard. The task was assigned to a telecommunications group called (in French)
Groupe Speciale´ Mobile. The first GSM systems were deployed starting in 1991
and were a quick success. It soon became clear that GSM was going to be more
than a European success, with uptake stretching to countries as far away as Australia,
so GSM was renamed to have a more worldwide appeal.The first generation of mobile phones was analog; the second generation is
digital. Switching to digital has several advantages. It provides capacity gains by
allowing voice signals to be digitized and compressed. It improves security by allowing
voice and control signals to be encrypted. This in turn deters fraud and
eavesdropping, whether from intentional scanning or echoes of other calls due to
RF propagation. Finally, it enables new services such as text messaging.
Just as there was no worldwide standardization during the first generation,
there was also no worldwide standardization during the second, either. Several
different systems were developed, and three have been widely deployed. DAMPS
(Digital Advanced Mobile Phone System) is a digital version of AMPS
that coexists with AMPS and uses TDM to place multiple calls on the same frequency
channel. It is described in International Standard IS-54 and its successor
IS-136. GSM (Global System for Mobile communications) has emerged as the
dominant system, and while it was slow to catch on in the U.S. it is now used virtually
everywhere in the world. Like D-AMPS, GSM is based on a mix of FDM
and TDM. CDMA (Code Division Multiple Access), described in International
Standard IS-95, is a completely different kind of system and is based on neither
FDM mor TDM. While CDMA has not become the dominant 2G system, its
technology has become the basis for 3G systems.
Also, the name PCS (Personal Communications Services) is sometimes
used in the marketing literature to indicate a second-generation (i.e., digital) system.
Originally it meant a mobile phone using the 1900 MHz band, but that distinction
is rarely made now.
We will now describe GSM, since it is the dominant 2G system. In the next
section we will have more to say about CDMA when we describe 3G systems.
GSM—The Global System for Mobile Communications
GSM started life in the 1980s as an effort to produce a single European 2G
standard. The task was assigned to a telecommunications group called (in French)
Groupe Speciale´ Mobile. The first GSM systems were deployed starting in 1991
and were a quick success. It soon became clear that GSM was going to be more
than a European success, with uptake stretching to countries as far away as Australia,
so GSM was renamed to have a more worldwide appeal.
