/** Data for the icons we want to generate CSS icon variants for */
export const cssIcons: (string | { name: string; css: string })[] = [
    "Bold",
    "Header",
    "Italic",
    "Code",
    "Strikethrough",
    "Link",
    { name: "Quote", css: "width: 17px;" },
    "Codeblock",
    "Image",
    "Table",
    "OrderedList",
    "UnorderedList",
    "HorizontalRule",
    "Undo",
    "Refresh",
    "Help",
    "Play",
    "Share",
    { name: "PencilSm", css: "width: 14px;\n    height: 14px;" },
    { name: "TrashSm", css: "width: 14px;\n    height: 14px;" },
    { name: "Markdown", css: "width: 21px;" },
    "Achievements",
    "FaceMindBlown",
    "Wave",
    "Fire",
    "Heart",
    "Clap",
    "FaceSmile",
    "Tada",
    "SmileyAdd",
];

// Derived from the file url of the Stacks icons:
// https://www.figma.com/file/NxAqQAi9i5XsrZSm1WYj6tsM
export const FIGMA_FILE_KEY = "NxAqQAi9i5XsrZSm1WYj6tsM";

/*
 * If you want to add a new icon/spot into this library from Figma,
 * then add in the component name and hash to the relevant object.
 * If the hash does not match a downloaded file, the correct hash will be printed.
 */

const figmaIconDefinitions: Record<string, string> = {
    "Icon/Accessibility": "ksqXzQjdToAghXkIQ75PE/8qRdUho8Wtux1FTo+mgug=",
    "Icon/Achievements": "F2wVcMWvjoqyKSOVULb+MwNg4MokkymkE1sfgp67s0c=",
    "Icon/AchievementsLg": "ItmSy5+QOlbo29cKcFdcFEyO3b7B1ZkJV86psSJarUk=",
    "Icon/AchievementsSm": "dYb66OTuhZoFQo1f5G2BfXkgU3UH2wd9H9SxxJkveRA=",
    "Icon/Alert": "jX18LUMTZn0UYhoOfW0NASLg3ee7KOrGcQgjppLr5e8=",
    "Icon/AlertCircle": "6HdiGS8rn6koRgJefALxzwIzYDn50RMpdBAGW1d9byc=",
    "Icon/AlertCircleSm": "EFrrfqa8eo1HZZu2i3XximWkuFxWY0JQPQCgX4ubsv4=",
    "Icon/AlertSm": "lwch36qiYIp1d6CTOhM1h8pT31/LtAQskwEZUAfr1dE=",
    "Icon/Answer": "WiN2WQ5QKzvRp++EgF0bZbyaJnVHtIbT0upDqixyRNo=",
    "Icon/AnswerEs": "V60xMQPAFVfbqxncrFlBOy8Q9rIcI3cQwryXfDdXJds=",
    "Icon/AnswerPt": "V60xMQPAFVfbqxncrFlBOy8Q9rIcI3cQwryXfDdXJds=",
    "Icon/AnswerRu": "ir0zZpKV7PnSm+CtI+GsAh/zbI7OGxbC6nyjhl5xmp8=",
    "Icon/Approve": "dJadm2Gr5kupwLs0orSiNngmWtdJ08RvI+jPdIpn1n0=",
    "Icon/Archive": "bATDz6j9Cz1ykZd25Lf7IJsALG8Zv4Izf93KiW1OtZ0=",
    "Icon/ArchiveAlt": "hQhxTqOG61dsd0uXn9RyuzlhNqW0XLQoljiAiATGl1U=",
    "Icon/ArchiveAltSm": "2jcZKLYO7W4xnEIQVORsHYm9Zed3oKwynzxvTDV1ZiU=",
    "Icon/ArchiveSm": "CRrGWRQ95dq4p6Fq8AiBo8HwFYnJelI2T5DIj6yodGw=",
    "Icon/ArrowDoubleDown": "EmN5fKLzTwRd8s9eds+mj1XszUbkgwq7J0vo+lDET2I=",
    "Icon/ArrowDoubleUp": "qMYEykGN8BK/pTAou2UvYRpP3Wh2fE6+VrQjPPokvgM=",
    "Icon/ArrowDown": "haxpTFcfPqWWXtSUmJPydE7qe3BD1yMmMU8jrAhnK2c=",
    "Icon/ArrowDownAlt": "ibiwv5rWLmEgJnijTFsg6iakKJBiGVyMCgB3SeiFqxA=",
    "Icon/ArrowDownLg": "Hyj3LH8IUROKEwaWyTcK6mx+7WxYxxa9pjs6UC7zoNQ=",
    "Icon/ArrowDownSm": "8K62gN+4kGlCWO0erVUIS6n0wLA15UC115nzXwILhdU=",
    "Icon/ArrowLeft": "0x4zMu1JwbuSkaHv1cTBe1SyHKh65W6Rvav37H6Epes=",
    "Icon/ArrowLeftAlt": "maPbQUXAPfNhZpQXl6q/W3jKYspyJd8RRoNwzhcEOfA=",
    //"Icon/ArrowLeftAltSm": "0grxwDpqrJiv3GVSxB/wIlXv2e4OC0hPzJs2h+fwbb8=", // TODO EXTRA
    "Icon/ArrowLeftSm": "qVWx7QWVcIyNc8VYI2gVR2hOaExjGD2a5+28wR7Z6uw=",
    "Icon/ArrowRight": "lRuwL1SuXcXXT+ggzGvGH77Zi3AsndUaZGi0vYqR9qA=",
    "Icon/ArrowRightAlt": "Bw3wF3j//23voTqfO6qtbZlOCro3Of1NDdaHjOIIQtQ=",
    "Icon/ArrowRightAltSm": "LljrIAKhr7HBXyXIlhwDUKR8qILzW0HosECzCgbu6v4=",
    "Icon/ArrowRightSm": "1U6LSbYPajpxPt7RAFe4sbcPMsqefdzfrJ1VOXG6258=",
    "Icon/ArrowUp": "gWCAVjHqmM6t1rhdLDEyckAW3sVM/LUaW7euAjTG5W8=",
    "Icon/ArrowUpAlt": "HWCOeTOpM3f0V29gbAKIVIPugFty5vvznD9vXa19tQU=",
    "Icon/ArrowUpDown": "U+VEZSdbOfSZ+Aw5x3LZRqVqw/cyu9F2jLHRsNmSRXI=",
    "Icon/ArrowUpDownSm": "n4er4zNsS/Q+pm7V1b4enDU8+04B/A2Hf9Wl0A10CDU=",
    "Icon/ArrowUpLg": "HKLQIQwFw/4lLk8CB/y2OW36SFQFnEAHttVLWD0h6VA=",
    "Icon/ArrowUpSm": "rSUOy88DRIurSSjdHW/Giz5skQYcLe2HBNFIDz7NWcc=",
    "Icon/Asterisk": "LOdlfbQq9LfGNu6TF41kphTHeANH1sjGjgR15W8AplE=",
    "Icon/AsteriskSm": "WohgtqJMPJQAZLKpcvHqn+U/wW+xxglMRPICCxFD75s=",
    "Icon/Badge": "XrQ1djhu/hjmw6YLVgzGjtmZPHDgLer+94aDiw7Q/cA=",
    "Icon/BadgeSm": "5T4j2fFhJQiBkSmLuNRV0Qb+aheAeMlYpZ3A+I87ems=",
    "Icon/Balloon": "rtsO/LSy5pqU9Pa3O/ouv8xZAZ5qLxLtg6Ei/rNyMtM=",
    "Icon/Bell": "87kn9QKHKcE8HIYxvEGKsWHrJKr9RHuvC+gDJbPD4fo=",
    "Icon/BellSm": "yLA+C4MVojkDOY4RyHQTl8s7hDtsYPjWyKTv5APLh1c=",
    "Icon/Bold": "HpOp/bw+efpXa1+S01TprIdkCnp/476YVRxRRldVjLI=",
    "Icon/Book": "2ZQBQ6A+sTwdkQNv/IWDiv5doQK5N6DDwz1moN1VFTo=",
    "Icon/Bookmark": "2f6VaqIv9RAAl+97AHxtw3YRZOzG6f39iN4hv70KAWE=",
    "Icon/BookmarkAlt": "D9XdhwkuAexNxFcUoKXjgCdvVQfzY0Gkm/Fmvc33g2k=",
    "Icon/Briefcase": "4gl9iHsb2HdjSvpcKpnFdTP8+LySCfmKlVxQ9MZVCYI=",
    "Icon/BriefcaseSm": "NAHXUsamr3wVRUrASOnKBZ1LZ8QHpZcOGclpsaiqYaM=",
    "Icon/Bullhorn": "ls85Ygfcj7oK1CARtFO0B3hNWFeCXIz78zd04k2aMic=",
    "Icon/BullhornSm": "3gFBW6bjljRdW6py9r1TZs25gOibPMLur7iylz+fYNQ=",
    "Icon/Cake": "iYIfKEYP/olo2bpGFLUhd5TjT8DhUn2yCgGPl9ECqsU=",
    "Icon/Calendar": "Kn31rA7RvKTzXMnCctrlpfdb4191w422Odr7f+2V0xE=",
    "Icon/Chair": "RRaj9eCq1qMReJAQLECMMlSVhsoQivK1lANZUbkSfMk=",
    "Icon/Checkmark": "HxdJYDfzdlSvIPMFPEkMKm8xs8OJOJEKwXKKNnyezdw=",
    "Icon/CheckmarkLg": "vPvG33MNKmHFbT9ykrQ/JLHCqA/daNc67Hvswy+C/D4=",
    "Icon/CheckmarkSm": "VqD05T4tbAiBGoTFaw+NdL5pYOSh9pXbWNjkT7kVhZM=",
    "Icon/CheckmarkVerified": "nNnhBP6eUICDFYQXDFhGanTeFMfETcNFcdBseVnuXkk=",
    "Icon/CheckmarkVerifiedSm": "i+YPXsntnGEz+8BricIoFhqwXUGsx9sZ5juApHDYCGw=",
    "Icon/Clap": "4R8ZHn2/DCD39jtiLUgM5XXIp6XSupbGp7RjJrJX6qM=",
    "Icon/Clear": "uGeeF1RbCOgfmzXjflPpYR8RrsuKtlk3J1p+LeVsOHQ=",
    "Icon/ClearSm": "4s8EVDS55MTMxwEIIn/j2SYkoooI1l1PNeFy1EmsnA0=",
    "Icon/Clock": "eybo/9yAWDOGsPmPObSsL7KgVG/idxk1wskHacRqmzw=",
    "Icon/Code": "5+JH28JV3RbWKOD+fyH9Ua2qhv9yHdH1c2RkdaLGwnY=",
    "Icon/CodeSnippet": "gslxpLPOVXPliP/Fli/88w2taYfJIqfLhFjmSlZ90aA=",
    "Icon/Codeblock": "I+LlPIGhoK9gGJp3nil81rKWNRSvTM0dtpors/+9NVo=",
    "Icon/Coins": "Giifv6fIbRU4pDXxlcbthV+9zq3gIv1sbf6Wtd2Av1Q=",
    "Icon/Collection": "bbDzoykX+jFvLG0TLIs4KsSl7hF/O1o3AUAFO2x0O7s=",
    "Icon/Columns": "42rPrmlgW08fRG3flovN/blC5sXTcGoGS+3pOyQ7TnQ=",
    "Icon/Computer": "897nuZa7X+QOUsZxv7kcqIa0LYTviECKLsY8G1WPo/E=",
    "Icon/Copy": "x+mWKzk+e4gUtZ7KC9/hJY141yhwZS0geUT2+sBpmL4=",
    "Icon/CreditCard": "40SXJcJTmlgM/mhelK51cLZxaK639Y7tDKlgccF1lBk=",
    "Icon/Crosshairs": "Qz1MSCEj9zf2qnQl2Gv2PBOQfgv5UFVc9/Nz3728U8A=",
    "Icon/Currency": "p8tKEeo3cHkuvWMRrid+xjJb7n5eIvBKoVHviyYXtDc=",
    "Icon/DevTo": "h4zzjWz6TEQB6rWs0dWykx0bXy5txvsLIFGyD+tA2eI=",
    "Icon/Diff": "ddqPpNw9pHoHiu4dM26gdm8Sq/gBZkYcNWy2BphTSBY=",
    "Icon/Discord": "CFbtEoA1GRR1+X38q1DpJza1Ac30p65M179e7NwjwDQ=",
    "Icon/Document": "kH61WGKJQ6XNpuSTiO2p5uqubpImp3rbl8Or9c9LDDE=",
    "Icon/DocumentAlt": "uUOvUG9l0WcoltiIQs/WwBrn0uSF0aSHMlcSwGaJQPY=",
    "Icon/Download": "/1APZDAvH81EZVfk39h+rSUExmTiJDsQ8WmiItZeWrQ=",
    "Icon/DownloadSm": "Qe2hY8vxQBsYSlxGtvL0ubhQNT8Bv63zXVuSasd5S0U=",
    "Icon/Dropbox": "ytbWYafFsRNgcT/Ing9lKiO0lgyOTkTKUG9cTvvOzpg=",
    "Icon/EllipsisHorizontal": "5Umc9bBFVQqYg/AMxRsuNM8Giw4mFYpr3I0ZDY5XD8M=",
    "Icon/EllipsisVertical": "63bs8KS7nehTL7mVXVZgJVUB77eYThJP/IYDcl4aDMc=",
    "Icon/Eye": "gJozX+67axnaffFCxRhaLREjs8xRHyKXCOPZDpoaFfo=",
    "Icon/EyeOff": "ifxMY99K42bL1BO1b191DL1YRbj5PDp5NXnmvx0vr1o=",
    "Icon/EyeOffSm": "6zEXOvBQb9HZ5uYNH3Z8i2nMGrHuUbRMhAAFM+swbn8=",
    "Icon/EyeSm": "4HHULPaWcYecpIW4rajP1FgDfWc0B8z+jHBDHVsl+Aw=",
    "Icon/Eyes": "dxDlNk6CX2iW8IArRTI9rJhmBW6bsIHFYmOhM6Xruxw=",
    "Icon/FaceFrown": "Mfi94nqYiqof1lbcLsEpdM8fkIuFqPIagIwGP42g2rk=",
    "Icon/FaceJoy": "jugNubsekpB51KeOOpg8+B7F6FjrZu5FVAJm5bGi0OE=",
    "Icon/FaceMindBlown": "dyLhYyKziorz7zJeiyw85LPACNfATkBC1SD2+RbHK1Y=",
    "Icon/FaceNeutral": "lDjL3s4vcFcphBWt0eXTOrFkAXxCNrTWW8/tyfwzwjI=",
    "Icon/FaceSad": "uA9xwvL59m03QFIyzFruJW10EzJ/QzFkRAX/hOo/7rQ=",
    "Icon/FaceShocked": "MlDe30/mMT1A0LF21LGBD1Sk6bXbrqy3WspiWuA6yu8=",
    "Icon/FaceSmile": "0rK1apC3MNe7/s3dV3gA91BSD+6FC6Qw9BwDUkMEZtU=",
    "Icon/Facebook": "sBGHh6n/u7aKF2UJj0sHiecd1a1kWvmK9MRqJncADos=",
    "Icon/Female": "aHAouHjWB6TKEUA764ZbTBzPdUVTEIia/k3axwZOWL4=",
    "Icon/Figma": "MT/hFXE9xIaEAyTAZphz0r6Zx/580/I9Rmt6kRoI14Q=",
    "Icon/Filter": "OrYpJGW/CaR+QaH4y176ssqKEelAG61xUuH9tL7rrRo=",
    "Icon/Fire": "8uc84dKc58W4lrg1w/f7Gcki6NL6MgvFgWKktzgRMp0=",
    "Icon/FireSm": "nWjNmRRsALwRwNeWv1dDmRsgNMjcCJ/Ervoj+6CqCFM=",
    "Icon/Fitness": "eR2QIcgYh5aFqM+pFXmsdWrodXmsRuqRiyEhqS4Em6A=",
    "Icon/Flag": "5oSqEMVbff3WSHg2fCKaqn1EhSHjdaZXKg81IuhkB2s=",
    "Icon/FlagGermany": "TwI6kzkAk26GmLqrHt9LRSid867DCq6aAvuu2Cebck8=",
    "Icon/FlagSm": "O3wJtbei/WlXJ81M1wegpr71kEFDkhmc9ZebjDuSnjc=",
    "Icon/FlagUnitedKingdom": "62grKkX6DyX3R8o/RV/Ro6nJdS1biZY9NTEHnjec7X0=",
    "Icon/FlagUnitedStates": "EumtffrDpxUCL7UAS/FL4omIJXddk4qiEkH1kF+1PAI=",
    "Icon/Float": "uQ267Q9rI6nGr37Pyp2tpeS2NxaPO5z9nJrHOpGnFmw=",
    "Icon/Food": "Aox8ujat81WM0LI9psPG+UNzs8D3dUHTDrMJlg/S2GE=",
    "Icon/Four": "1gD+c+TSMet/aQxEdYMa3jZEvh5VaxPNfihhaZjJhxg=",
    "Icon/FourLg": "2YS9gFwbqePZzh6cGmNhdVhagWDOV9HTv6vaYlJM4dE=",
    "Icon/Gear": "lN6yBWiuGGbpvfibcz5ok5CGRjqwx3IuQDUQaXEO+ss=",
    "Icon/GearSm": "5RgRWAxoIM9NcnCvKTm+JqIq8dfZijT6COkH1/os8DM=",
    "Icon/GitHub": "1Tqdt1vFrjcm6XeEZarkyOZEjci/AIhQRtXAem0KSWw=",
    "Icon/GitLab": "OblCkv1K+p/K7dUqWrhUuFTAeHjKw1v+FEbbAClz4IM=",
    "Icon/Globe": "cCcew7SmhPHYf+qFL5XUh6Y8uvTa+ek77A9p+wozCIk=",
    "Icon/Google": "ex8kGJusQ8NwdFctS64KiztDu7RwosYEURs0RwLCruI=",
    "Icon/GoogleDrive": "84dBKB74qlOK20jsjh71qAI9ZsALsPtkGAoxshOcizI=",
    "Icon/Grabber": "0JMOFkkwBz1rpKImY9bcAMaQPj3dx7rb8ZRgEML/aJ8=",
    "Icon/GrabberVertical": "4cf7/1canNarZPnzLwWmFOH/RlwMogOfkTslr/L/zV0=",
    "Icon/Graph": "75tvkXbGaDxsf6nQPfvWX/Qoa+1IbJbV4N0a9b/AuwU=",
    "Icon/Grid": "++ixSh4ufTm7VDmokwZTSwiakBeQVN1RFu//dOPzi5s=",
    "Icon/Hamburger": "FDCybqZjzFu6VnWthxqlwTpSzMJ8I2Jy4el/4j+EXZA=",
    "Icon/HandNice": "yZh1b+aLHYKP/rnQWVJpekKlJALPxZdhSPvLW6Qsvd0=",
    "Icon/HandPointRight": "EgBqDObRetECpTNlE3BsQS9N3tvzsj9UgnSW42DEAZM=",
    "Icon/HandRock": "Pr8k+ZNTUs+F17lmo3XIiRQnrcobGarY8weJd30vhcA=",
    "Icon/HandsTogether": "j7tGR/v6onsni3efQNeXFM0iwzaNJhSKV924L3V0ssg=",
    "Icon/Header": "3fhEPDpbXV2w0VbkKa251C2CcqJunBL2brKFz8uX6RE=",
    "Icon/Health": "6NLCc6Qrewi5i4pgv+y7ZEgofsqVZhbB8KcDk8y91m8=",
    "Icon/Heart": "EHGVS1+BA4Qw0sUFPVEN50CLoZv35K+QFbVN03wUKDE=",
    "Icon/Help": "Vhlk2MbUzWg8YLm/EIS6Qm1wFIHySF6iMbJ9JiCD01U=",
    "Icon/HelpSm": "bnr2mng5nujLuOV1eVPgNxRuAb/TGyG7cOOJN7IDknQ=",
    "Icon/History": "lQNbFAn8HJXmylgMEuSIjHYiHMEq72dR7yV88xb4yi4=",
    "Icon/Home": "RTJw+TCkkBp5C0CDmwH2XQwQmScrDX573Hli3WZQyoA=",
    "Icon/HorizontalRule": "gm0W/5wYJJn0aDAfb1s27wsrMaWjzstMM3KntBKZ6Vc=",
    "Icon/Hundred": "DVqhJcwafE93EYGwWBDwFW/rDEyA9t2Yr5pOyrzIwd0=",
    "Icon/Image": "24VttR8mVp9wXnZqIFw4jg9Orb0873IXSHEtsCF43kI=",
    "Icon/Inbox": "Z3ROXsg3nbkrbgXRa4e3kAPkPBM0+zLg83sSqYWdyYw=",
    "Icon/InboxSm": "6ahbU8IUZBgoYOM6IAmz4B6FFbp/R4BE8GUByyyj390=",
    "Icon/Indent": "ftvo+b+APwSBVCqJ3rGWmVdFNIQNq+hQc8qeiXQvj/4=",
    "Icon/Industry": "oLZGFBkHkaLo0/FJiWr7gCXc0BEOXvGWhB7bQVUlo1g=",
    "Icon/IndustrySm": "6p3aujbbCPicWhC4917lx31HPrPRzcspXu+Zc6Ff4sU=",
    "Icon/Info": "9kG+a9e8k81yOQchEROgDvFkSm5BKBI+8eJIedpcuus=",
    "Icon/InfoSm": "PyAQWRJJcycBQu7/Zy3yqhwqsKHNLDepmi6XiXqRSLU=",
    "Icon/Instagram": "zLcvBbpTpsZq5EPhAgoVq0kgRnVDLV22F5LOhu9QV4A=",
    "Icon/International": "4nOCa2WGEBm+D7odskgE1jmMt+9ttnnyV+93vMDbxRY=",
    "Icon/InternationalSm": "gyamBp8p23qAgMAjO1f4gG6ucpvlmz7NyrkNPduDAqs=",
    "Icon/Italic": "PUxmAkLuAeqI5BdeVnzij7KNuii83diTiISGSU9XXgc=",
    "Icon/Jira": "VHIgedNFJLGGUrh1YRtnGusWgU6c3Ncm6K4UfsoI9T8=",
    "Icon/Key": "s9U95fqiqzmrTs8GZZdqBaHgLE8mBww1eklM47Zh1/I=",
    "Icon/KeySm": "TxFy5yHLiSuN+czlTuiqVDhmO7SDf2O9N6/ilMyXoTA=",
    "Icon/Laptop": "Tod/DKWH2ACVC4RlBnCC4OlImGdod3rdoHwTSmUoiC4=",
    "Icon/LaunchPad": "YV+lmMmyLO3UW3nAQoZFe5bP9cOZki59JZU/A1yfK9g=",
    "Icon/Lightbulb": "vIUzmEgONfBHl1dTw7RquYxFfjiML7pdf/F/Aam+nmY=",
    "Icon/LightbulbSm": "TfGmWfpRL1cZxEpfMMTBkk8DJGnXCOa0aCwkLaou9hQ=",
    "Icon/Link": "OhFKYv0FHJA9kPvZXstOBsGAYJMHRA28Etsg1KHYSDg=",
    "Icon/LinkSm": "nRW8conJrkeBEFjl6iGDesUNFBkPUuFtimzdybq4oF0=",
    "Icon/LinkedIn": "/t4v/4n/jX8QhbtKrGLA8Np0zJOxkmk8aMp1Pgt7Z9M=",
    "Icon/Location": "glplbzWXi6JUj0LhYnIoGjCAwQnlLQYNPQ06l2h+3UA=",
    "Icon/LocationSm": "kBO+HAXyz4b4373L3iAFJGBt472ZEXEDe75fjs0pUIw=",
    "Icon/Lock": "nirGuov6QrOcye/dTF1o8pC2mFMz94nkpoUJHWSK1KY=",
    "Icon/LockSm": "isY5YsNduNAPLIvHO01+f0BJ4HZG6Sbl5daIx8lvG+4=",
    "Icon/Mail": "X65AF65vZ05uWkritOCRsl9fgYjjPqOB7dK/9EyoMf0=",
    "Icon/MailOpen": "Gt96xUeaf9qmTKlhyNasd2c+cM62dcdX/cZCahJLU5s=",
    "Icon/MailOpenSm": "t1u9oAH1rs1hLvI/JFqxHdjD6QqD84psulbQIv4L5BM=",
    "Icon/MailSm": "dI3HGJ3sJKRz6quN4VUEvvapMEW/ZdI6jQS1ZkS6VAA=",
    "Icon/Markdown": "IIIKeolHRkcIe6yb62bPvdIWZiIE3f9lsA25QQNU3Bg=",
    "Icon/MarkdownPreview": "Dd4+T1OCD+vzeODYrOrMg34g1mvmm/secUVAta8OmHA=",
    "Icon/Medal": "X5M/0OEfdIPYz9HTFIN4v9HfeC8U+C3+KbBeBunogyA=",
    "Icon/Merge": "5xpK7jJNZD/hVQVJxShfX77OHmdCM0TXWmr2TLDq/1w=",
    "Icon/Message": "vExuJhZuapEx0DAG4D0Ydwb0FH4qM+zZgiDXudO9KiI=",
    "Icon/MessageCompose": "Aj0Bt+K1L1Pkt2SFeW2ZuhUBOG80ySTo96K4iq/BDgE=",
    "Icon/Microsoft": "8HWnJlz/vM4svKPN/7UvvLRVGLpmFKDS704Hwan389k=",
    "Icon/MicrosoftTeams": "31pOHmUUyQL2XHzKgcCysG/uqscxQtRyk0QzUVE+Cp4=",
    "Icon/Migrate": "d7VY13m9PnvRMooOB46TLH0BTiFXYumq8Ny9FirmFj8=",
    "Icon/Milestone": "X/NNd7ZN6Hxkrj3Y8jUToNvUpPX+AvIO3Ynh0iQiAYk=",
    "Icon/Minus": "ef771YQKi5sPhHweuOZ9qAivGWSINM8MH8l4hYgobf4=",
    "Icon/MinusSm": "aAb3vkFc2Nc0L2NT+/0FGZleLfcUSsAukY9dFGp4qxw=",
    "Icon/Moderator": "dZqs9NM8n9Mv6wOB29PWHN86Q39lhy+M7vKb4+g9Kwo=",
    "Icon/ModeratorSm": "DB/8GBD6arPCxKrBaQEFJpjaxiOKl9DquQhKi7qBJrA=",
    "Icon/Money": "/2zEYUY8oKnBdH3wKl63HWXmYYSHfWG8qVmwGGh6rRQ=",
    "Icon/NotInterested": "d73/PGRoo/qbf6cop3UN62UeFmR+6SVHA9XwbtaOvxA=",
    "Icon/NotInterestedSm": "dc/i5YIBP5v5ay9CcbZsZfMBvYotef6pxdLejJX1NxY=",
    "Icon/Okta": "wTWJBc2jFdFW79doyvHPBNMau/6aTjTyhzK0sneif8A=",
    "Icon/One": "kBZ+LjmxdbxN7HpCDAU89WxipJBUmbU2ejkEBQhxtfk=",
    "Icon/OneLg": "0vvPb8A77TUkJAmXrSv1pgCvQDAjtGLUTX8iOTPam/c=",
    "Icon/OpenSource": "dwIbIvdamGJ8emDVONBmm9TS2VjSb4HkWqXdWrTcHkk=",
    "Icon/OrderedList": "awKM1sF+dRtbzC2+5BpGBjPk8NcgKkgFHLBIOWi0GoE=",
    "Icon/Outdent": "/PfqLq4KGZ9mpho0DNDAhDwNKH+zjUHCJ0LoJa8ctu4=",
    "Icon/Paperclip": "057NMhwygUr8Q4DD58UloO6y0wFWpuF++0qo0V8wX0M=",
    "Icon/Peak": "IS4cMtx3Eq6Qppf4MvwwPriQ0REuf2SK2Hj4tKqaXjc=",
    "Icon/Pencil": "RV5GujPzDxdsTpAJDUZlnfD62M1UoChzYeXCLHUnNK0=",
    "Icon/PencilSm": "igU4Pp8wraSHk07WL8fzFyqHEoafdCkIzWaFrw6zQ58=",
    "Icon/People": "E9znyTBC2RHBuJQVIgZj5I+Ob0ta5MCa5esl0dIjVGA=",
    "Icon/PeopleSm": "kTB0HtYRMhpbX8tEwmcHqipptvSu4evayTd4VX/3zDg=",
    "Icon/Person": "uzv1b60rDWZfvM9fk0PBmS0Bx1PKwxmJTq/T/ypvFP8=",
    "Icon/Phone": "XOflOD6eQrhFJpfo7znkbs9N+9TzQZgheuZ8vaf+HXQ=",
    "Icon/Placeholder": "BKt5bgWn5WYiV+xFX3wnCHiYF3sisNNUWO1HxDxi2XI=",
    "Icon/PlaceholderLg": "2/kfg8fyNkVcW1oH6+AgX2WPVaQ24k+0/iJmRAgAVBU=",
    "Icon/PlaceholderSm": "w4DQh1mDKQI6qy2vNfOhfzBY2u4BTFhamWDaYx1OCWE=",
    "Icon/Play": "15vT3LB0tthcwLSf44+np4oRyrfMHUUT1zHVvstOFKo=",
    "Icon/Plus": "eDi5Qcxpxe6omY6os4ErYaRGff6716fTTJazbB24nFk=",
    "Icon/PlusOne": "G7xz69JpP5VrvJBXNkZz/035iJNSFfkeql5sTkZNuHY=",
    "Icon/PlusSm": "j+SdC7j4ceLumGCzUjmjNV+dUILJoasRTIxJbGpqX7U=",
    "Icon/PromoteDemote": "x4+E8/zUrPb/DmTqDq1RN/3SemRlJbCRpf6+5D1nGvM=",
    "Icon/Promoted": "SIMyZGR5h5IMt1ryOMxNZxex1zjCn0SGYtO/xw3cDq8=",
    "Icon/PromotedSm": "BzpH483dBApzovVnCFaxfHcfTcSn+wRRabywWtnG02U=",
    "Icon/Question": "NPV1rs4VWVT7dXum1HCKAB3l7ZoXdk1IqCriOH473cg=",
    "Icon/QuestionEs": "AJN4bqLkVgXT2SFL3IbADrd/q+XKDBlp87UR3kJLXt4=",
    "Icon/QuestionPt": "AJN4bqLkVgXT2SFL3IbADrd/q+XKDBlp87UR3kJLXt4=",
    "Icon/QuestionRu": "o6zH4w32YfI+yG/LE99ssBavjnMx6rvlvv8eBgYJbac=",
    "Icon/Quote": "0tJCrYZVE8sFceSAz2OMvTicQSATyZkLrt/tUcOER2k=",
    "Icon/Redact": "uLbCbCfRhk4YKtWmjpILtoF4z/9iuEhW4PUqt2ELBtM=",
    "Icon/RedactSm": "tUq/3JvJG3hXCriMyJMQWBBlX3CQovIGluNIrJ3dABs=",
    "Icon/Refresh": "DEUA58Ynvo3LHE9L6zNnvSWnzMB8hAdYY5KC5sxY3DM=",
    "Icon/RefreshSm": "fkUnSSXVTFp6Kvko21Feog0qM1KeVvBjdnurMYOWS0o=",
    "Icon/Relocation": "ttEgcvlDjdSKSe0jZYXledLOm7buZSAcJHpa88aEEIM=",
    "Icon/RelocationSm": "nHsOj7StVEBYjJTxAPIvNTnGsM29raqj2GTHPPKiNT8=",
    "Icon/Remote": "Dq5zsRl6NnyQ3C4FPZIoYKRabh0GN7CZ5oGadOm7x0M=",
    "Icon/RemoteSm": "e+qy5ujbrJHyFmzDEnNM94+9fazoof0dLpS3m6aBUKs=",
    "Icon/Reply": "Ume9gIzG5x9iej5p6eSMzJlaFGVfjOaDDAKu7gfVsh8=",
    "Icon/ReplySm": "DwHxT2bpFktGt3NCFi2ygdUfMJrxUnQPm4jNPTWNhK4=",
    "Icon/Reputation": "ePdsSKx+NIUNkkTUIaMUBI6pO59Q/IobCIVij0IG80o=",
    "Icon/ReputationSm": "EvB9wC7f4Jk6IBz4Otc/0V9JN+DrIYkJFa46Ydm6i8I=",
    "Icon/ReviewQueue": "7MkrqBZuc0mpuWdNNfYLP+THyCMl+XrQNgg8vVqAQ2Q=",
    "Icon/RichText": "1v0fhCt7Fx6AHrVxByNotQ9eXwMn4DSh0Lo0U2EXJ3k=",
    "Icon/Rss": "Fs5jrl1q0SsDyxjTLDSau6cevsG/auQYmxPRRxhMiqg=",
    "Icon/SOS": "vA5McWaYmQxOJp6cOn/Mr5+nLPPwEEJALRG4tPjhdWs=",
    "Icon/School": "fYgYk4J2doo3/nuzrvOpTfs8/Ll+08qRjgPbGe/4hYM=",
    "Icon/SchoolSm": "YUO9dy2Rls4Yx7UZne5A8/RNJ9prtjeV4SsoYJvDGBU=",
    "Icon/ScreenFull": "5NR9kWd3YpD9FSN1mWb6hhlnqkAqQZOP4Z05gs0ZBnE=",
    "Icon/ScreenNormal": "yW56C6FPS7MU5HyU5Zn0nonxIH8JesUOd2XTZzH4uO4=",
    "Icon/Search": "S1qaB2b6+SYCcEAu+LJrNNEZe530qaSZ2KJTAG/qHfM=",
    "Icon/SearchSm": "VuM/AI9wBcoAhNWtyuxlBKy8kzl4gmUkn0ETDHNJzfg=",
    "Icon/Share": "6iqrg5A9aIeGErcvez0ES8HbDyE3MbHJzJoNTBd04ds=",
    "Icon/ShareSm": "2hKG68xktB04xfEKnW5DJlmDbs5MJdR20XtlSgAMx/s=",
    "Icon/Shield": "0nP1gJ6pOvgSnq4811LBnKpP+i+pqFCvep4U4aFu9Es=",
    "Icon/ShieldSm": "vilDtOBJ33Q1QYOfIbuVN5ckrvScHqxvNakUcu7Kmmo=",
    "Icon/ShieldXSm": "btp5ez4DeYGPLCocm4uz/QOEeRLdQ+qSxyZSVqGKUJs=",
    "Icon/Skull": "OxcC/1AR3+hP9PqsWLa1uk7DUZU+Kx4kvrx90bahbeU=",
    "Icon/Slack": "jOFzIvhj2Q+wLy4RTIISQv9D8G3NnzjbaLni6+DuM3c=",
    "Icon/SmartPhone": "Fr46AKc4TyC/Hl/pWbuRM6K783/ROgeQ7ccKYcdEwRA=",
    "Icon/SmileyAdd": "Iun3+CJ5SG99dYY3o7GqPMh9LiDnKg3t2estUHmBvdo=",
    "Icon/SpeechBubble": "hLusNsjBaPJ/eL5OY2barnD1msdv7XqJ+srpQKfY4dg=",
    "Icon/SpeechBubbleError": "U0Jf2RSTWYq906lGy+E+jGtTFDkH3UrLipu9k93i8e0=",
    "Icon/SpeechBubbleQuestion": "EWoSx92tMgf4ZKiKZ6eGlAJyVuVWdOqXOvqMSq/x7jk=",
    "Icon/SpeechBubbleRight": "ke854dYxuaInBykTTgExTnh+QaLhOCoxzawgOF1mOVw=",
    "Icon/SpeechBubbleRightSm": "U+wicwB+h3jFG42sVaAXeVIlfv/kLvjPz5TeuI0FbJI=",
    "Icon/SpeechBubbleRightStar":
        "/t/SivjOL98d6y9U6NPLggCM/r8SMgFYf8oNv5uLU2I=",
    "Icon/SpeechBubbleRightStarSm":
        "2NRgXlUq40a18HMJMZlxHuVY9tCCJZPB+rEwLJbQbLM=",
    "Icon/SpeechBubbleSm": "hDz0VKrhPO9ten59pFriajOs5ABDMX4utaofVyekNJA=",
    "Icon/StackExchange": "tyaNwCVj7WvpjcgWthlMx0DDJ6VnmXvL+9OOA+CtiHE=",
    "Icon/Star": "S4LGcpTcSl0fWUbqEhU+NOq820Bg6Ttzm5VwqP5zC4U=",
    "Icon/StarHalf": "ASqCj6DAwNcyV4PyWRQmSQb3SwbMsIOyED3T0wzRlyI=",
    "Icon/StarHalfSm": "k1KF4N1BdNn5+JRBBXM83JpH/ofJtqysBr0N4koICLw=",
    "Icon/StarSm": "7JISB4rBic1F1SdixV54R7dHzVcHzl+bYkdBjDNs7OI=",
    "Icon/StarVerified": "+humBxOtKfIyRDfLdz8fHRJDNNa1AU6opB/zbtF53E4=",
    "Icon/StarVerifiedSm": "jmWtoxqZtFodURyEsRFJ6Q0P3/2gYKwYqqj4/bvK5ts=",
    "Icon/Strikethrough": "ZR9msY8kXknLjucugNM+UnBpAPbGcqWWwrduicUORyo=",
    "Icon/Stroller": "z/P7WEh/rlvhisyndHvo5KDP/EYQpCiOQ5HyAG1BlIQ=",
    "Icon/Subway": "vVWgo/O8KJdmJgD2bOVVTxPV4xPm/PwmdU+sMVGQiNE=",
    "Icon/Sync": "NY9m43faJL3fBYgCNH1uFh5jIVX0N+0y+IdghiL9cK0=",
    "Icon/SyncSm": "P492g7AO9VPs3BHog2gE13brrAEJaDloBnnp8WMlwCU=",
    "Icon/TIL": "EwJ3TgXRYa1HLge84VkDN6ado7VDWwtQRPMMPER4Jto=",
    "Icon/Table": "R3CrsYGoZNx35vTUpuevE7eJh0tyILA84S17/LmOvao=",
    "Icon/Tack": "IE3UfxrOjqU3pVKoieOsR9eyRJ6tGDzAgnSenmGd1XE=",
    "Icon/TackSm": "e8UFqTjvecH70CIHYO1c6WFgp2mJW8Qr07AqR5deBrI=",
    "Icon/Tada": "hLex+x8LsNMa7JmTa4Q0eaKB9loGxO8AKsE61suC+b0=",
    "Icon/Tag": "Vf26kc16hGpcKT/Vr2TeTcLMnaHafrfQNsRUBKyE8Yk=",
    "Icon/TagSm": "24AkiU/zaURF8GAxOZ3g3RrwT47/oJcm9y3iQInq+bA=",
    "Icon/Tags": "Z0+CHV2Tba9sMLh0j0etgnCZC/Pr+fPmhcjHf1zhb+Q=",
    "Icon/TagsSm": "fTmz41wGlIy9cPkLKJa+7cdx11LzYKYd0yMoIyThk1g=",
    "Icon/Theme": "IxUpc3xJGjogqru5pc6DXtr4F9UfRkRUbh1OcoPjavg=",
    "Icon/Three": "L29hf1U400bHEKm/9bi5v+WDkIsDF9vrBA8Cfz0mBYU=",
    "Icon/ThreeLg": "10h+Pdx6ywneAoLBsZ+RzT3kz21p01fuxG2io7nWgVo=",
    "Icon/ThumbsDown": "aTfZyAe7bgACCQ4IsfxteePNYbJygEQxcjGH7Ecl1V0=",
    "Icon/ThumbsUp": "Z8B7dvVq6nBS5nyaYFk68o0z4sY9UzCpycgJkQWW62M=",
    "Icon/Tool": "ngSH3scirAKlUHgyB3X01mbCEBQpG8lVP897R0lWkfg=",
    "Icon/Trash": "txJgftW3R+xNXgxVrQT14Q7rA5tgH61Mh54HpbaG7WI=",
    "Icon/TrashSm": "PdtlESke3CnF75tI/WoOeG0Ghwpqw522u5niE8fgPNo=",
    "Icon/TrendingDown": "4YFAJQZPq5iqsFzCOn7s2R3nSAKkiZIlNdVHvZZxxwo=",
    "Icon/TrendingNone": "bY+v9h5ZKAho02aCwt43nn+OI2T1VR2S6apk32tMmSc=",
    "Icon/TrendingUp": "nNBbMNR5KarU/7zWRQwUQG4vYpQPJqQtt6c9lvhUU20=",
    "Icon/Twitter": "X2Y89U+9+mtL8MVb8dZeBSTmeuNNsRSQCwK7gulVJuY=",
    "Icon/Two": "XhbaAWz8Z/kC20UVgoVfnaizswue6GQRRxbbapLnq3U=",
    "Icon/TwoLg": "EUh59nm+jBf7e/AHaCRMLy1N/41Sb9FvN3B7VaYtfRU=",
    "Icon/Undo": "rwDGeiKjj6UV4zTeWf/BJoiyL2P34JU8/xQtIcpHXH0=",
    "Icon/UndoSm": "CFsxenhH57HTUDV04xX5vEo2+sGBn2+AxJ23r8aPork=",
    "Icon/Unflag": "tVKzg2fFJnYzOMAjLzuc3nsHRfKbJM/xoj9qNixSwY8=",
    "Icon/UnflagSm": "R8CpW73yqa/w/ak1RpWOrFndMOKLY97akJumtVjGCuU=",
    "Icon/Unlock": "Kx+8n0eopzUFtMBFhSuJbeIOlzPzhoLe1L1m4HGt9Zg=",
    "Icon/UnlockSm": "DjJQ+FP9bOUJiDUUULyYc+gbh6CKLIFq87VfIDP14gw=",
    "Icon/UnorderedList": "LVmR0aH8H1A1H5mljf1mA7d+Z9aENBDf25iJB+xNUNA=",
    "Icon/Unsync": "XGIzZz0S/sOjHbeOjsdQfHd9VbC1ob7Gd3GuQMMyd/M=",
    "Icon/UnsyncSm": "wjhg4yIDnm83IrMfwxZvoBcg3Tb7UP+nEy5oiXjWOis=",
    "Icon/VK": "jWZCZmuBbSgMyKF5ANq88qLng6ccAZikjZa+6Ei41qA=",
    "Icon/Vacation": "jX487OKHJv93Hpcevh7gVrDicwlZuT76oirZ9+npaIk=",
    "Icon/Wand": "VoVRFipWu5k8DJBS9aoPw1NBAUVDc9+K0NtNFjeCRsQ=",
    "Icon/Wave": "l1kWzNG5Rn6XiawzMYe2dUWxPPbdC7+aYqdV17FCT7s=",
    "Icon/Yandex": "YA3MiSPQPDhcidp26Dchbqt+EmAE77CREi6gihQS68I=",
};

const figmaSpotDefinitions: Record<string, string> = {
    "Spot/Ads": "AEZZRK3MQhByGmxGa5k0BAnonlduH4SFhnxES4zZqUs=",
    "Spot/AdsLg": "Yr968TWcsVeUSkKBvwIE0rYMGWStbmGv25+zkuflng4=",
    "Spot/AdsXL": "rmx0B6BTh3TGahe1PpTtYAKRQcwr43GCO6kKEDoB+lA=",
    "Spot/Alert": "aCZcr3p9gnDhhc3OsibgxQ6FgIqF46Db/W5W2+jtZxU=",
    "Spot/AlertCircle": "WsmKWq6Yjp4RxN2RyNt9WoO6qS5/2LQM994c+vEm7NE=",
    "Spot/AlertCircleLg": "rzClPYK21ZJiGUVFryERPj7+V94ti7y3qUGcllMUuIQ=",
    "Spot/AlertCircleXL": "X8iMhfyOeCwT4tSIBd4a0kiIyXG9d+sHe5AnOnrL7/0=",
    "Spot/AlertLg": "NheJbF2VxViHbWBFp3XyKhBa77FFVxCnt0v1nIVLMdg=",
    "Spot/AlertXL": "hMLJdiUNBHpGB59c15bDNxogpwF9XaYEL8pkr578Omo=",
    "Spot/Answer": "4QC9X7BidusAMBEL0pk/GaUnkGVwdFyj6ek+G6RgI+Q=",
    "Spot/AnswerLg": "gXjd6BW6Jq1dU6q9QWchE8bb3S9sxWRJswBkwD+uaSc=",
    "Spot/AnswerXL": "sGu08OKsly/9vfpDro/oyj43hB++ihIwsqzTEtKJbPA=",
    "Spot/Approve": "Ol7MYE1imR6EVTAV1zxn0TO6ADX1O1qUZHzjncsdXY0=",
    "Spot/ApproveLg": "CjVcf5QT2tVQmFLsV1qmsjWVOCM7ge05j7xC2JyqzFA=",
    "Spot/ApproveXL": "kiDfzRmGRRjgiUmkaxij/3I0vh0uH0hvSfORZgZCtqA=",
    "Spot/Astronaut": "Y+PV9Lzmmok+JjrAFNGDqw2vxOv+JFxVBC8gaDC8laU=",
    "Spot/AstronautLg": "+dKIDCT713lTznIWCtzMKSACg1L+V5CFJW36gzIcarU=",
    "Spot/AstronautXL": "LrTE5IYpZ2DiHLlpYCEowNGH3cMyWaQs0XPjaXwgqHk=",
    "Spot/Award": "vnQ+jdzoGy3j3PSTwCC8abPwG1efmU7cTUNkUjlZG1w=",
    "Spot/AwardLg": "YD1nPMkpPnirer4BrIsX4oxyo9eR3YnDaLvjLDb8HBY=",
    "Spot/AwardXL": "WmSV6YXB252dq71NlqryQwZd9wYzjI114hIJFJSQXdc=",
    "Spot/Badge": "2d0fkamDm3CEJ7OAqeQlsqeSj+JDBssAlB3r6h+Xg3E=",
    "Spot/BadgeLg": "qbpjf+0rg4DxArvRl4fX8gxn5L0q2pHPcxmrNrqF0B0=",
    "Spot/BadgeXL": "uJfyzno/MEEuV9ufBPT1thzw9p/xuVTLqontmk+BLks=",
    "Spot/Bell": "eg0/1KRhqx1KJ8SdfQA7fRx4GXwTROaIdJ41LZnHU6w=",
    "Spot/BellLg": "3fpgBiViL4JZsSXcidIskR3WgNX5OgUJ4Rv9RNz3Aeo=",
    "Spot/BellXL": "dXBvw/pctH8/c44YEvXncjNtYdXbtCs4m5KkN8X8gas=",
    "Spot/Bookmark": "mpKxHLlo/Mc4tRrnqCE45WxOt7853QoSgXdmtu33Q20=",
    "Spot/BookmarkAdd": "0XsHeYDrELhUSZlwDF8v89wtcRuXjKoPSTmj15J3Hqk=",
    "Spot/BookmarkAddLg": "O/G8PT4hcquRSuCiGEjIyejR2YT6223ifuXC/7i5XVc=",
    "Spot/BookmarkAddXL": "uw7/GWJu/x1AWKzvhQuSIoqHFsMLdfRb1fND2hK15SA=",
    "Spot/BookmarkLg": "IqRqIw7I8VDsS4HKMFj7EYcr6kLTS5qcOn6tly1IvB8=",
    "Spot/BookmarkXL": "wvN6TJAhVLmXidTfcDqmsKi8E0gFWkQaBYEQfUKf0Gs=",
    "Spot/Bullhorn": "XYk2xi6mkY1Bm3afbWzRtQARx5SGrbDUQp+HyGMr+Vs=",
    "Spot/BullhornLg": "WOIawF6KQzUF+BUNHO257T0fC5YDudBruH9pJNvWFlM=",
    "Spot/BullhornXL": "r3KhZ0gQPoX8wJahgBBBjCxfgE6w0+Zc+ARquHaiAm0=",
    "Spot/Calendar": "GPEd13E5NcWtg7xsfCoHn8TAB+R0SQZK/EQwxP+ADYk=",
    "Spot/CalendarLg": "qCUXEOtwwXINSf4rho41tuHl+mYrYi/O7p5ogSVwqV8=",
    "Spot/CalendarXL": "Pp8UCdn2pRFXJAhSz1pACUtjESyblRbgIY/bSEvKcXw=",
    "Spot/Checklist": "KJTEWHsv4kXh6L241p+0X4BF4Vdo5cRN5ZlMQ8fca8w=",
    "Spot/ChecklistLg": "0DVFIjoXv91EW7w4/5ZNVloEkWQoaVOHxS3Mv3dwvTw=",
    "Spot/ChecklistXL": "OFa7l2CFuVminld0kO1Rx1yjv9ca2HTSegLfM/Cgyo0=",
    "Spot/Clock": "xwb0deZZQuLWj+ejBz5Pio1QRFktkRqIQPxrquuqxSs=",
    "Spot/ClockLg": "8lC9H5oDAgzYB+HBk91ri4UnWJd4WsKTE0hzO09+eU0=",
    "Spot/ClockXL": "HT83bKINDCPD/HYjeeBRyxs3CZgJFN1IoIcLPiZwMLU=",
    "Spot/Collection": "cSKolhk+1umgUrzCqtaNGUAJ9RLB1KinMxC1C/AOAjM=",
    "Spot/CollectionLg": "7tyvJydkYrKv9MJsYz2M/aQkC4QQqBWSBRp6EoBtRcY=",
    "Spot/CollectionXL": "BcSa7FRmpjIbGCzwGhjO2TuvlHhf4hiW2Ed0odE9uSI=",
    "Spot/Collective": "rjVI1xeYVU/ptYoQUqZ1P4RRGIAkIN6iSAMFGLuTvqY=",
    "Spot/CollectiveLg": "3f/Azo+mXw18M9B39aGf/Sd6AeLWiolwlDPGxWXH1nk=",
    "Spot/CollectiveXL": "mFWjdmkKGUCPtDx8iiu/zCoK2PEourfPgNo/NOEtGPw=",
    "Spot/Compass": "HP8pFTRV2wt96JtRmnusXi/JLoZmQeECsaNByykCfX4=",
    "Spot/CompassLg": "cxkhq2ebLqaBuim8yZOQDZrgSMqbEnM2ylzc0bd55JU=",
    "Spot/CompassXL": "To41oIUV329ZOenWwugQToqRhiyLnIW/BPUiIMwQYpU=",
    "Spot/DocumentAlt": "w8e8dpT1GHO6hyBqOfnqP0TBqByvjDkiZC7nTLl+I08=",
    "Spot/DocumentAltLg": "qNsQftwzNWHKK2Y6ta42jC6qdVZ6TWWgy3b6MXTwNKg=",
    "Spot/DocumentAltXL": "ePnCvKBdBkczN81IIVYtDqKzw/cVAddHnOZjiyMWJyk=",
    "Spot/Empty": "ABHzXRHaZYiffvOoIQBnBF2DFLntGnTND/RkkupD9cc=",
    "Spot/EmptyLg": "DtES1bYv4307yYDsBVNWocgGqdxHtEuMcQyZ3T9BuBs=",
    "Spot/EmptyXL": "pw9IWOEHkgj7wmh5YPywVlqmZ6WVrFuPwEe/FG3EVRE=",
    "Spot/Expire": "khtzej0OpQSpwvVE/5wEITlyjZC9gq6x6yByQ8ARnUU=",
    "Spot/ExpireLg": "ViHy3b67xVfDZxGYOBLfnukMM0IMi+/iGPH5FSFThqA=",
    "Spot/ExpireXL": "NVh/LMJM6O7qv5RZqL6eCReaFcMg8C0/nmnKEqwPzC8=",
    "Spot/Fire": "VsxPvGznt/XSRNeAl9Vc3El6ykPr0c4tahyu7m/8GLg=",
    "Spot/FireLg": "nLl1hq5T+g36NUAoFy/DDBCz1EXT+rJjAnacYmQEaIE=",
    "Spot/FireXL": "WZb4mMlzmPUltn+sYOquR4Sd98ddfbMadRc7PCRgbZ4=",
    "Spot/Focus": "7hZzcHJ5Xuk3j/xkzQ8ojATYLxajj9q5u6z9qnJBBT8=",
    "Spot/FocusLg": "TmQtun0wohi2sjNwLkSYsKfricbEZg/nCTskdh5OQ4c=",
    "Spot/FocusXL": "wDCSovkjOjZ4kq0kIhnM2aa0B6gbk/XmgRrenVxXsJ0=",
    "Spot/ForYou": "evqLVQuGRDcSJfZY8B3VTnWkLDPpUEltdUN+i2sJpwg=",
    "Spot/ForYouLg": "qRiemlKVYHKPeP8Y8gkZcdu+E327Ys0yDDXWXrPMYNM=",
    "Spot/ForYouXL": "a2rosXoOsP7E6L/9NKiRog+jDRwJy9oX+CnFlLxPmdU=",
    "Spot/Four": "I6EPDUUB8FVzPd44w0TNK+DKtkeaR+2LjFkoFxuaTrA=",
    "Spot/Gauge": "2yTBMBKaRoxvy5F2HOdeV2Znz4Gaz1Z1DbnpW6Jkbt4=",
    "Spot/GaugeLg": "xObGBMfiTmIWRJ/mrEvKLqSfHdLh815qMTOPQygBQ1g=",
    "Spot/GaugeXL": "4ql03tNlAHUWx7XOLEtSMmvbjkyAAvpYAJPkyX3RXS8=",
    "Spot/Gear": "YygW6i/uhuGEwvhy0D25C2OTeiJgkSQ9B+vxII6syxU=",
    "Spot/GearLg": "1XeYs1+lRZOUn/vk0fVh3FkqtXxJZrgz8bvloPlRQ/c=",
    "Spot/GearXL": "UZXdWZzSLzhYUr0FWZxyJ9A0Ay7XuXFh49jxcwGPwEg=",
    "Spot/Globe": "A4NbewRAm51CocHeZjtdddGd87x0dKmx4QhBxHqzREo=",
    "Spot/GlobeLg": "YHbNG50It0ciWPk60JniEDZy9T8vqzQM0VUqcXZqsRI=",
    "Spot/GlobeXL": "4LZMo6SE7U/Arrat20/7ZFJ5JiH/3tGOluOEitFN6xg=",
    "Spot/Headset": "N/L1gwmAkZT7s68sutyfrtejtvpwBrexxzVxP5LAcHk=",
    "Spot/HeadsetLg": "45W7zxGdqqskZbHF4tq7ubwCB81v8XpMbVYrmZQZBJo=",
    "Spot/HeadsetXL": "uufk2q0EK23LMvRlxygraNDUA+P6218XnKXODyTb0w8=",
    "Spot/Health": "DJ6smebc2cZbVWNF7vO0XZTdOiPXXE9qyrCkg3LkOKw=",
    "Spot/HealthLg": "D+HNToScD+pWPkcD49LgJOqmPeHXR4wDJGc+pNDbaA4=",
    "Spot/HealthXL": "8UVqab6/LLU9sCE5xcnCp5ekSLA2G2rYlw2h+sL1gIY=",
    "Spot/Heart": "Ell/gDYcpsUIDq8LAByCwundhMjHSb4vbiPpP+GbAng=",
    "Spot/HeartLg": "hvs9j6IAdCNfxsmWQ6IZdOVB8rZii90hbY7sGlwyhoE=",
    "Spot/HeartXL": "wlGzwJGgGqO/tNi5jjHjLpC7VpAHboUW0OEGO+M3JYk=",
    "Spot/Identity": "ggxqvJ/g8mC4nBt//on+pa9JxtXKo+4Rg1SRuqJ/oxM=",
    "Spot/IdentityLg": "cYyAUcNYP/lzEzvvHPY1kgfK64jzyleu4MNzxWF/nAs=",
    "Spot/IdentityXL": "z3ygANiQAs9oTYfZSEHHmbZ2HnIUoXfj8gxkLIC15CY=",
    "Spot/Image": "ujuB+lAMYw4XuSgmJWcHZaNmMitGslv3iIpv0nbQj8U=",
    "Spot/ImageLg": "o295dNsypa2wIJ/qoTtBi/DQlGRZhqD+Msxf619Qo/g=",
    "Spot/ImageXL": "KhKBQRGxwsZlFnXMW9TOUWaoeImUUZnpDvu0ukesW6I=",
    "Spot/Inspect": "s/M+FEkxNVIMnz+vqVOKidAnJk4E5N3VRVxljlhAQVM=",
    "Spot/InspectLg": "jpDadymR7GMz0Q8YTiuzb3xHBtxNqvTTm6quK6FLKV8=",
    "Spot/InspectXL": "eBxhDd3GZ5Mws1H/ul+hh0Pp4z0kBZEpdTktZ6KqfuY=",
    "Spot/JobListings": "eS+r6l86EvGJKRFS6W+UfutzuB4Oh4FrUL8kCItlqBg=",
    "Spot/JobListingsLg": "kbbGDEZ330kpT1crZo3nD+xxtnhF5ODHJ18YmA5dVQw=",
    "Spot/JobListingsXL": "eWF7aljdfSZLv2kFCqmMUI9GlcejUmTEaqnw8vtiCwE=",
    "Spot/JobSearch": "Qj2a3PQbPufr78b6UHC85+jo10JnQEY1kQklI+eeUHQ=",
    "Spot/JobSearchLg": "ii+33nw1PqdunxWWpb7gHQqrqRfHM8fpGXbKoYDdxFk=",
    "Spot/JobSearchXL": "4KmCv+jNmfMbjGiz3yQtSP8HNtCYVFzCCedTF3JYI3Y=",
    "Spot/Key": "UXVMew+wHz7NlKQl2i/H5x2wg0NWGP9d/VoNH2OY/KY=",
    "Spot/KeyLg": "l81eafWwJaEgkUYy9v175OUxA1xwFr/kdTjsfK4IvGI=",
    "Spot/KeyXL": "UREqME0u2tc9+3q0h6Rs0Bh5ASBRn1vms+cLOKIPPvw=",
    "Spot/Lightbulb": "6RjlUOLFdAuKAVdYLYNPAhvsXZXnKoTbDONErdaXR/s=",
    "Spot/LightbulbLg": "q6zNOVctQjXbD4Nbexis+thIMcm/sLXmMl/cY4eK3J0=",
    "Spot/LightbulbXL": "zmf12EvLlOU6kZMDuKB7TqfIMCAA5y0+OYtPlTsv/Hk=",
    "Spot/Location": "OmuzS1Jeo+M81TJ2Daz4wEmpH8zwO1TDtzqZYIMbwKE=",
    "Spot/LocationLg": "jW9PfqD5TCX6ZsHnPidkiyCeXKhQIztRAPzsmnRquHY=",
    "Spot/LocationXL": "IRIqzLyrdmbdT314Y2vXNhQ9zNN/bpQX86e4vHPEfSc=",
    "Spot/Lock": "m+f/f0+Jo/n5ljR40x1gD8Vn1BlGTgUyTc/HcQuQwPM=",
    "Spot/LockLg": "oOrOcvgzhV1ACBv6UvxRABBTcFM/7SL8pWiHnfgqDJY=",
    "Spot/LockXL": "QiR3xJrFt9rlLll8Z1QZqCB9N8DKn3DBBsVs5hMuy7o=",
    "Spot/Magnet": "AJQ3TrUCmzhiMDl3zp1y1N576fj/BPnpvkmTt/wpFxo=",
    "Spot/MagnetLg": "JPrejKpxw5rV5Ncqr9hUJ50eE0Ka2D6BY+3ukJQ6lMs=",
    "Spot/MagnetXL": "br3YgkHwW/fg7B1EkoIB7uO8ACW4Yp6/DuAkZU7rM5w=",
    "Spot/Mail": "n8HFlO8vo8UhU+QfqyaWGuHtFs92CkeYygigNQ2nYS4=",
    "Spot/MailLg": "lq/kzmEVa2ESkHyVXoYX78EyTfY202L9xkRG+SAf7+8=",
    "Spot/MailXL": "aPGP514yhWeSkzAKEjhBm+pJEvOaZO4vgX++UJuG64Q=",
    "Spot/Mention": "rJMoEV6f+DZ4xyeCmF4d0180yKhIRwiUfwy1w+0m3vI=",
    "Spot/MentionLg": "1szHr9R03g72hGEOIDyBFxH0NPPGYzzW6ZkyvxJFH68=",
    "Spot/MentionXL": "wOHYCFFCHCNXYwI5D8JcE9vD5GGJWduN8bGUu/dYhuE=",
    "Spot/Metrics": "oRq86hCs00ZGN+kpNEOFqF3ZoYgVU5AsbQZ+atocj9k=",
    "Spot/MetricsLg": "3M0gRYFZ/+F2CoeHy9dh/ZCqJyvuoLb6zpC4Uu0OFNA=",
    "Spot/MetricsXL": "D0OWTnjdLlpOQPGr5bohNaWErXhD05WMuHVsZupEz2w=",
    "Spot/Network": "wxSNAD+piIYzZqJFDQB9mTrt/R8/06d2Tf1ZenZpRkU=",
    "Spot/NetworkLg": "RCvwLimbOvVZ1sGudR1fdo7Yz4bbxtqJwXS3AIz5hRo=",
    "Spot/NetworkXL": "D4TJOwWAnUQv0o08fJtxTLc8hixc/oZaCFet5btjR9Q=",
    "Spot/One": "WlZnNBqeu+IutvdJUVAri/iUIBadDAlRcDwBkptD3hs=",
    "Spot/Page": "birIqSn6NjcthQEkPzhdvz3y3OmCMjgRtzjHCe1TGzk=",
    "Spot/PageLg": "pvb8x5PigrC8PWxtcXrWgj+C0E+6iDWCFYxMXfuNiVU=",
    "Spot/PageXL": "23XVfDMQbztGBQTW5IHY3Lrt4pePZo9TyB3xHkZdah8=",
    "Spot/Pencil": "9jghBqf3brKDG620fH2hOfNHdNp9hrFcPZ9vJjV47/0=",
    "Spot/PencilLg": "M74l9xhBxRrUHZzI8CEm67lAdpkcTYL159gEtFP/KrQ=",
    "Spot/PencilXL": "TYin53chQTh6Z3BIsxjtaRB0Bff8BFuEcmxiIQ5ux5o=",
    "Spot/People": "Y3PXTuxTkxiRm5Vv2BfDtECbMiuHXn1PLMcmpDyUpso=",
    "Spot/PeopleLg": "38XUG0TH7VOuTMqy0sUDVKZCUeZXAn5fSLPJLwCIGd4=",
    "Spot/PeopleXL": "uziMllMzQH6bNpHaU/jxB3BS57DS8nRZ39MgzL4lcYg=",
    "Spot/PersonVerified": "TrncHYflH6bw0RHL3M4QhMI/FLr4BSPxp3bkAh8IHOg=",
    "Spot/PersonVerifiedLg": "bpmWXLwOeV2Lu94CybUVFww+qJr2XKbBs2zncWYhWf8=",
    "Spot/PersonVerifiedXL": "1wYFvc5BB10bro9283pgBlf82FuQwynHzixx3reJr7M=",
    "Spot/Placeholder": "2mc3MumSqct6MpTZqwD5kKrHi7zEsuv2JWTywr4TdR0=",
    "Spot/PlaceholderLg": "qbtk0ZKXUM8GKWMb8ou9WpTWwdfWMd5jnddue2Ws81Q=",
    "Spot/PlaceholderXL": "+aIn6bdl5Kn0SaGWHdOEGYaI0Vlv3vhS1eFXU5KgDsk=",
    "Spot/Play": "CM/JF8+WY3Yl1MQNZH3bfC3cwhXrkdcO4BqDDfXu4A0=",
    "Spot/PlayLg": "zoupQ3G6nNepGDMjZepZzzO00Ti4lwk2IGigJRVWjJE=",
    "Spot/PlayXL": "8rCcGckzVMPik4tqbmmrpwm7ZcGWr1YUbS5wEl6rOp8=",
    "Spot/Puzzle": "nZ2MC27vF5sRxEEJcrBkYtzBry0BhtMKNtI4OaYEDf8=",
    "Spot/PuzzleAlt": "OuGch4M/s0NxVFCU36B2IEwe5N1BbqRhp+u8pI9ODZ0=",
    "Spot/PuzzleAltLg": "N0ZG+74tALZ6UTz+KgCnf5Rbwl3NBFhmZgrAT/GKofc=",
    "Spot/PuzzleAltXL": "8WF7aBxfYNFUH0xRQvwoWDuXOaYWFz7UnFCAR/HOlmU=",
    "Spot/PuzzleLg": "/nb2eRFsVWvE7SoS4nVZ1jppl2Dy61oeTD0hnyFt4s4=",
    "Spot/PuzzleXL": "i2Na12oMCRIPsKTGHlWT2/5WgZIEQ3Tbs98P2IP7fpo=",
    "Spot/Question": "/sxQKR6EVN20o61H552pEpDBy2iOq750SsX4iTCogCo=",
    "Spot/QuestionLg": "1AjtJbEs4G3PEJomHEvGALVT9+bet+glfioQfiIobz8=",
    "Spot/QuestionXL": "uxzawYOAqyswuPoP3iWg4mTjV4YvGNWO0K317s0VPPQ=",
    "Spot/Quote": "ldL5ALRoGxAXMH6sl7dSUhtFq7k9Q2xIgiFpicGIMd8=",
    "Spot/QuoteLg": "sO6yr4FTmQ3LVu85T9nHa0IFR8+gBRhKwgcNFdQVzt4=",
    "Spot/QuoteXL": "TVwCTWtCdoiHMWW1nU1Rf0j6DosrJuiyOU9Sd1ZzbtE=",
    "Spot/Refresh": "/qj6BYzqwLuTRYti4LVI+Lmlm+tCp+bv6QlfoXUw5Rs=",
    "Spot/RefreshLg": "Eph3nSP62NzFWh1ZwGINbREwXx+QnZIM3P0sYOykrBQ=",
    "Spot/RefreshXL": "N5iD8LOpgIqEBRqvOJOSonfB4a+bZ7+sTG7HTNz+L+Q=",
    "Spot/Reputation": "fu2hfim2sNpnu7ju7yT+2aq6X+CSYzdtFRi4abHT+gw=",
    "Spot/ReputationLg": "7A3KAw3MN+4zdTtgBQlFz3r3WibtD26pO5dsTxV8iCg=",
    "Spot/ReputationXL": "JPOLzlbwrlKkDxLegJMYt2brdEtP3fpTVKeNxCJKWEU=",
    "Spot/Rocket": "qgyffr3loB80q/5sUFLJkGeIUa8Q56IMRlqbdGz4dwM=",
    "Spot/RocketLg": "PHQkNgFSzyGioHh6qPKLdfVhPQ0HAoadoCFio6oOUio=",
    "Spot/RocketXL": "ozO4Idh2a0TcbSLEfEK4SMZe/djFygEw7BS9Xc+3fJY=",
    "Spot/School": "Eerzrhqn1YYO43Sw1bFLGdDu5Iel0hnnW9vOgXfG90c=",
    "Spot/SchoolLg": "o2ee6ROXA4pUzK+hBHuS/IlqTWbZ6pq2kTQ/vkTbklc=",
    "Spot/SchoolXL": "/0DBfaHjxm2XUKgRI3TUlrTIJH0mOfdWkVbSsSwRNSw=",
    "Spot/Search": "13zugTjb/nP7FumEj74hFLxQKwgsmWv00mKYRxw4Ghc=",
    "Spot/SearchLg": "px9ALNsJcNihinyQHJvbE0Z0jgPcfZEFwA/JfglRCqw=",
    "Spot/SearchXL": "UyJ47K60bUdu6j8ZIb4kbIS6A4L2hyEm2na5voIzUyQ=",
    "Spot/Star": "29g+jENdQkq34f1D5+cr/82lauoGsFyUTrTymtC5eqE=",
    "Spot/StarBadge": "974POXIrf0PG2SiXVaJqi447dvIw2uSjLqM+jRWY23Y=",
    "Spot/StarBadgeLg": "JRdduD+/hQcmMXKuo/XA7NN17V9ltojPwTbPVXzJFwk=",
    "Spot/StarBadgeXL": "4wh3G4qEMqsD5Oy9J76KJkbTzZ7qIDSV/Wd1Cgy75R0=",
    "Spot/StarBubble": "wryb1MUeP+iTAz2mqjO62BeE+92DbZxELFhrIkziFMU=",
    "Spot/StarBubbleLg": "3039tKsSL/r6QFV3opW2ym3iGxgSczXt1efj+UTABtY=",
    "Spot/StarBubbleXL": "ZOSyzIQojDbi62MSVnmcP0m2iRYEjF3+AhwPyS6wIAQ=",
    "Spot/StarLg": "aBIn+IBwReD34vlFObzu17GU5dnyBMaVQ+8Agqe4sc8=",
    "Spot/StarXL": "9CKfUXhwvO2I4NH9y1cVmm86pfH1jXpmfTODTtzV0c8=",
    "Spot/Tada": "bp+6T1XIjNbVIZjLSBPuzVHvEEX9yy+onbAsIZPKuS0=",
    "Spot/TadaLg": "D3sFBF091O9qptJtkrGD/ah9uyAyp/9MUBeTjXBmT60=",
    "Spot/TadaXL": "VvbwEXmMPsQv1GGQ9AeRav5Q+AA7sd2RxoJrKquDk9o=",
    "Spot/Tags": "1BL7r+RdBN4x7Zdn7TiRf7u9fpaQA/2EwcpBKeP88DI=",
    "Spot/TagsLg": "N+SndJwH38NnSfIZyg+dXXe30K42K14HhYrf5rR4lbU=",
    "Spot/TagsXL": "O3QFnh65xnyR3XPTKVXxOQCljX2gRZPLdviWcc7Rblw=",
    "Spot/Target": "H/4LrqhyMCu9O0UCpD4xujeCRO7ozTRYQwdTsF4swK4=",
    "Spot/TargetLg": "YarDahunjkF5SIBxtUP82QSaeu94I14/uFKyyi/xEig=",
    "Spot/TargetXL": "yiXM/loSN78/2R31/6wgvnpIfB8WFvR3cXsD4kGozwA=",
    "Spot/TechnicalWriting": "dRicLmpd3rhnA0w7ddIb6hDsDvUUD/zteHjMjevYLPg=",
    "Spot/TechnicalWritingLg": "iX3QlI+zlJ23CrumEI8+6lre10EooGnbDVqucWP0LcI=",
    "Spot/TechnicalWritingXL": "wcKxq79iioTg+EJdTmghWggux1jAgUdWxwjcWTYbLJc=",
    "Spot/Theme": "03/IWa1tHP385Vx1xPhURz4Gw0zY888Ru8GqYQ2U92k=",
    "Spot/ThemeLg": "YWyq/Xy+093QOCkoRf+tmpOoTCA1e9Gh1VbPcKJ3IU0=",
    "Spot/ThemeXL": "PzL59hNPnWntjmaUymEW2IMCVY9T7VNbxBIzGfaKHCg=",
    "Spot/Three": "PepcC580sxBx+HFJOQxtzBiNB9MQ5wEJK4Vy/Xp43Ms=",
    "Spot/Trophy": "dpSz+oABVtgO84yte53gu6J39x8mJLWk8029D/GfPLE=",
    "Spot/TrophyLg": "hbtNsqKHVBbYeeNT5xiqqL37+pDVhCmNfEMraYs9o7Q=",
    "Spot/TrophyXL": "bUamF0xyBNbU358BFn0LfMlgac5uDabWm7PR1maZJng=",
    "Spot/Two": "5ei30Wqw7VggJxSARcQGdjEGwQHGEOsBGLtyYJOk2hs=",
    "Spot/Unlock": "M+MzWT52YQfaSEDQpx1PPcEq552wn65KjHIF6beQ/r0=",
    "Spot/UnlockLg": "eHhHEifTSINFCrGawBfvSmUY9/BqxT1KMU7VLTRSLjY=",
    "Spot/UnlockXL": "nUl2Ia7t8GHhrgCitRx/sHfN5b7FNUbiTv5LgaxfnqM=",
    "Spot/UserAdd": "xh9pM0wqYbBh/wRLAq3PPnqW2g1j3xtqJz5x6fZEO04=",
    "Spot/UserAddLg": "DnJyCuDo4t3o8sByRUpXrS8a699HMNunYXU9GQfBD6I=",
    "Spot/UserAddXL": "wsVuOGprHH6HSDLhOQaEgRg+LS4N3o1rFRgjNNhbkik=",
    "Spot/Wave": "8toyQ+ac9LYYpscPtO9FSeReX1dtP3uVIz7/4pF/pdo=",
    "Spot/WaveLg": "FZjjb6ReDmFTdXjq+sgObP/KoWlMfa4Q9gy0t4RFmI0=",
    "Spot/WaveXL": "5R4N+EkZSKPXsHuYEwBVVwqxn5s8kJxuNDQgmVGPu0o=",
};

export const definitions = {
    ...figmaIconDefinitions,
    ...figmaSpotDefinitions,
};
