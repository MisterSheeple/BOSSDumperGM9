![banner](https://i.ibb.co/7zVmf7m/Spot-Pass-Dumper9-banner.png)

[![Discord Channel][discord-badge]][discord]

[discord]: https://discord.gg/537RyPNmSg
[discord-badge]: https://img.shields.io/discord/1209201515063943219?color=%237289DA&logo=discord&logoColor=%23FFFFFF

SpotPassDumper9 is a handy little doodad for dumping your 3DS's SpotPass data.

## Usage

### With Luma3DS CFW (any firmware)

#### Prerequisites
* Any 3DS/2DS/Whatever with Luma3DS
* An SD card
* A way to read SD cards on your PC

#### Instructions

1. Download the latest release of **SpotPassDumper9 for Luma**, available from [Universal-Updater](https://universal-team.net/projects/universal-updater.html), or as a release [here on GitHub](https://github.com/MisterSheeple/SpotPassDumper9/releases/download/v1.1/SpotPassDumper9_v1.1_Luma.zip).
   * If downloading from GitHub, extract the contents of the zip to your SD card.
2. Hold START + POWER to open the Luma3DS chainloader.
3. Select SpotPassDumper9 and press A.
4. Follow the directions on the bottom screen.
5. Once done, the file `partitionA.bin` (or in rare cases, `partitionB.bin`) will be located on your SD card in the `spotpass_cache` folder. Upload this file to Pretendo's Bandwidth bot in their Discord using the command `/upload-network-dump boss-database-3ds`.

### Without CFW (11.4.0 - 11.17.0)

#### Prerequisites
* Any 3DS/2DS/Whatever with a firmware from 11.4.0 to 11.17.0 (latest)
* A ***blank*** SD card formatted to FAT32
    * **You *will* run into issues if your SD card is not blank before you begin this.**
* A way to read SD cards on your PC
* Python 3 must be installed on your PC.

#### Instructions
1. Put the SD card into your system.
2. Open Mii Maker and wait until you reach the main menu, then exit and power off your system.
3. Insert your SD card into your computer.
4. Download the latest release of [SpotPassDumper9 for MSET9](https://github.com/MisterSheeple/SpotPassDumper9/releases/download/v1.1/SpotPassDumper9_v1.1_MSET9.zip) and copy the contents of it to the root your SD card.
5. Run the mset9 script (On Windows, click on `mset9.bat`. On MacOS, click on `mset9.command`. On Linux, run it by typing `python3 -m mset9.py` into your terminal.)
6. Once in the script, use the numbers 1-4 (followed by a press of the Enter key) to choose the corresponding model and firmware version for your system.
7. Press 1 and then Enter to run the sanity check. It will tell you that your title database needs to be initialized.
8. Close the script and put the SD card back into your system.
9. Launch system settings.
10. Go to Data Management -> Nintendo 3DS -> Software. If a message pops up about data corruption, press Reset. Since this is a blank SD card, doing this will not delete any of your save data.
11. Exit the settings and go back.
12. Go to Data Management -> Nintendo 3DS -> Extra Data
13. Don't touch anything but look for the Mii Maker icon.
14. With the system still on, remove sd card and put it in your PC.
15. Reopen the mset9 script and again choose the right firmware and model for your system. Once you've done that, press "2" and then the Enter key to select "Inject MSET9 payload".
16. Once injection is complete, close the mset9 script and put the SD card back in your system.
17. Follow the directions on the bottom screen.
18. When complete, your SpotPass URL cache will be located in the `spotpass_cache` folder on your SD card as `partitionA.bin` (or in rare cases, `partitionB.bin`). Upload this file to Pretendo's Bandwidth bot in their Discord using the command `/upload-network-dump boss-database-3ds`.
19. If you wish to remove the payload and use this SD card as normal, reopen the mset9 script and choose the "Remove MSET9" option.

### Without CFW (1.0.0 - 11.3.0)

#### Prerequisites
* Any 3DS/2DS/Whatever with a firmware from 1.0.0 to 11.3.0
* An SD card formatted to FAT32
* A way to read SD cards on your PC

#### Instructions
1. Visit the SpotPassDumper9 for Soundhax minisite to download the zip file that's right for your system by entering your system's region, model, and firmware version.
2. Once you've downloaded the zip file, copy the contents of it to the root of your SD card.
3. Put the SD card back in your system and power it on.
4. Open the Nintendo 3DS Sound application.
5. Look for a sound named "<3 nedwill 2016" and play it. This may take up to 10 tries.
6. Follow the directions on the bottom screen.
7. When complete, your SpotPass URL cache will be located in the `spotpass_cache` folder on your SD card as `partitionA.bin` (or in rare cases, `partitionB.bin`). Upload this file to Pretendo's Bandwidth bot in their Discord using the command `/upload-network-dump boss-database-3ds`.

## Credits
* **MisterSheeple**, for script creation
* **TraceEntertains**, for testing and refining my crap as well as giving me quite a few tips and pointers along the way
* **Foxlet**, for the excellent icon and banner design
* **Zoogie**, for creating MSET9
* **nedwill**, for creating soundhax
* **All of the GodMode9 contributors**
* **Special thanks to those in the GodMode9 discord**, for helping me troubleshoot a few things
