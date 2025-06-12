from cx_Freeze import setup, Executable

# Dependencies are automatically detected, but some modules need to be explicitly included.
build_exe_options = {
    "packages": ["mediapipe", "cv2", "matplotlib"],
    "include_files": [
        "c:\\Users\\ysman_chpques\\Downloads\\Programming\\March! Projects\\March! Projects\\March-Executable\\.venv\\Lib\\site-packages\\mediapipe"
    ],
}

setup(
    name="ExecutableApp",
    version="1.0",
    description="Standalone Executable for ExecutableApp",
    options={"build_exe": build_exe_options},
    executables=[Executable("ExecutableApp.py", base=None)],
)
