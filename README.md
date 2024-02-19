![banner](https://i.ibb.co/7zVmf7m/Spot-Pass-Dumper9-banner.png)

SpotPassDumper9 is a handy little doodad for dumping your SpotPass data.

## Usage

### With Luma3DS CFW (any firmware)

#### Prerequisites
* Any 3DS/2DS/Whatever with Luma3DS
* An SD card
* A way to read SD cards on your PC

#### Instructions

1. Download the latest release of [SpotPassDumper9 for Luma](https://github.com/MisterSheeple/SpotPassDumper9/releases/download/v1.0/SpotPassDumper9_v1.0_Luma.zip) and extract it to your SD card.
2. Hold START + POWER to open the Luma3DS chainloader.
3. Select SpotPassDumper9 and press A.
4. Follow the directions on the bottom screen.
5. Once done, the file `partitionA.bin` (or in rare cases, `partitionB.bin`) will be located on your SD card at `/gm9/out/`. Upload this file to Pretendo's Bandwidth bot in their Discord using the command `/upload-network-dump boss-database-3ds`.

### Without CFW (11.4 - 11.17)

#### Prerequisites
* Any 3DS/2DS/Whatever with a firmware from 11.4 to 11.17 (latest)
* A **blank** SD card formatted to FAT32
    * You will likely run into issues if your SD card is not blank before you begin this
* A way to read SD cards on your PC

#### Instructions

1. Put the SD card into your system.
2. Open Mii Maker and wait until you reach the main menu.
3. Exit the Mii Maker and go to your system settings, then Data Management, then Nintendo 3DS, and finally Software.
4. Exit system settings and power off your system.
5. Insert your SD card into your computer.
6. Download the latest release of [SpotPassDumper9 for MSET9](https://github.com/MisterSheeple/SpotPassDumper9/releases/download/v1.0/SpotPassDumper9_v1.0_MSET9.zip) and copy the contents of it to your SD card.
7. Put the SD card back in your system.
8. Turn the system back on and hover over system settings (don't enter it though).
9. Power your system off and back on.
10. Launch system settings.
11. Go to Data Management -> Nintendo 3DS -> extra data
12. Don't touch anything but look for the Mii Maker icon.
13. With the system still on, remove sd card and put it in your PC.
14. Run the mset9 script (On Windows, click on `mset9.bat`. On MacOS, click on `mset9.command`. On Linux, run it by typing `python3 -m mset9.py` into your terminal.) and choose the right firmware and model for your system. Once you've done that, enter 2 to select "Inject MSET9 payload"
15. Close the mset9 script and put the SD card back in your system.
16. Follow the directions on the bottom screen.
17. When complete, your SpotPass URL cache will be located in the `/gm9/out/` folder on your SD card as `partitionA.bin` (or in rare cases, `partitionB.bin`). Upload this file to Pretendo's Bandwidth bot in their Discord using the command `/upload-network-dump boss-database-3ds`.
18. If you wish to remove the payload and use this SD card as normal, reopen the mset9 script and choose the "Remove MSET9" option.

### Without CFW (1.0 - 11.3)
Coming soon. Check back later.

## Credits
* **MisterSheeple**, for script creation
* **TraceEntertains**, for testing and refining my crap as well as giving me quite a few tips and pointers along the way
* **Foxlet**, for the excellent icon and banner design
* **All of the GodMode9 contributors**
* **Special thanks to those in the GodMode9 discord**, for helping me troubleshoot a few things
