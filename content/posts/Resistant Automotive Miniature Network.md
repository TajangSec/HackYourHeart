+++
title = "Resistant Automotive Miniature Network"
date = "2025-10-03T15:02:00+08:00"
lastmod = "2026-01-02T15:02:00+08:00"
draft = false
tags = [ "ECU", "Automotive","Emulator"]
categories = "ICVSEC"
slug = "b3f2e3"
cover = "https://blog-1307674006.cos.ap-shanghai.myqcloud.com/HackYourHeart/demosite_ramn.webp"

+++

# General Information

## What is RAMN ?

<img src="/test/img/ramn_1.webp" style="zoom:33%;" />

RAMN (Resistant Automotive Miniature Network) is a credit-card size ECU testbed for safely studying and researching automotive systems.

RAMN is a set of PCBs (Printed Circuit Boards) that can be used together to simulate a CAN or CAN-FD network of ECUs (Electronic Control Units).

## Main Features

### ECU Network Simulation

RAMN simulates a CAN/CAN-FD network of 4 ECUs. By default, network traffic specifications only use classic CAN messages, and are identical to those of PASTA.

![](/test/img/ramn_2.gif)

### Interactive

RAMN can be expanded with boards using Arduino-style pin headers. You can add sensors and actuators, and physically interact with the ECUs.

![](/test/img/ramn_3.webp)

### Plug and Learn

RAMN implements the slcan protocol over USB. It is recognized as a standard CAN-to-USB adapter. No need to buy and connect other tools, just plug RAMN to a USB port to get started.



### Expansions

You can stack expansion boards to add new features, such as Trusted Platform Modules (TPM), external memories, and JTAG debuggers.



### Drive it

RAMN can be connected in closed-loop with the open-source autonomous driving simulator CARLA. Values from the virtual world, such as car speed and throttle control, take a physical form on the CAN/CAN-FD bus and inside the ECUs. You can drive the car yourself, or let a self-driving algorithm do the job.



### Programmable

All four ECUs can be reprogrammed over USB using the microcontrollers’ built-in hardware bootloader: no need for a JTAG programmer.



### Easy Layout

RAMN only consists of Printed Circuit Boards designed with high tolerances. PCBs only have two layers, with SMD components on the same side. All components can be soldered by hand, which makes RAMN accessible to beginners in electronics.



### Built with Open-Source Tools

All PCBs are designed with the open-source CAD tool KiCad. The firmware of the microcontrollers is based on the open-source RTOS freeRTOS, and the open-source library STM32 HAL.



## Usage Examples

We make RAMN open source in hope of facilitating education and research of automotive systems. RAMN could be used:

When providing training in electronics and automotive systems.

When developing and evaluating automotive technologies.

For research, especially if temperature and manufacturing tolerances matter.

For CTF and bug bounty programs that require hardware.

And more!

### Education

RAMN tries to employ as many popular technologies as possible – not just CAN/CAN-FD. Expansion boards feature clip-on probes to observe important signals, and can be used to study analog circuits, SPI, I2C, UART, etc.

### Research

RAMN has the size of a credit card. It is inexpensive and is ideal for situations that require many boards, for example when evaluating the impact of manufacturing tolerances on a technology, or when subjecting the testbed to conditions likely to break it. Real ECUs are different from popular development boards because they are designed to resist the harsh environment in which they operate. RAMN is mostly made of automotive grade components that are designed to operate from -40 to 150 degrees Celsius. The microcontrollers are not automotive grade, but they can operate from -40 to 125 degrees Celsius. RAMN tries to keep a balance between open-source, cost, and fidelity to real ECU networks. The expansion boards are not automotive grade. A terminal block at the end of the CAN/CAN-FD bus lets you add other nodes. It can be used to develop and evaluate ECUs. One limitation though: the CAN/CAN-FD bus is terminated, so it cannot be connected to a real car.

## Contact

Refer to the contact section of the RAMN Github repository.

## License

RAMN is open-soure, with permissive licenses. Please check the license file for more information.
