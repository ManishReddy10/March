import java.time.Duration;
import java.time.Instant;

import javax.sound.sampled.AudioInputStream;
import javax.sound.sampled.AudioSystem;
import javax.sound.sampled.Clip;

public class Metronome {    
    
    private boolean isMetronomeOn = false;
    private double bpm;
    
    public synchronized void playSound(final String url) {
    new Thread(new Runnable() {
    // The wrapper thread is unnecessary, unless it blocks on the
    // Clip finishing; see comments.
        public void run() {
        try {
            Clip clip = AudioSystem.getClip();
            AudioInputStream inputStream = AudioSystem.getAudioInputStream(
                new java.io.File("src/Input Audio/" + url)
            );
            clip.open(inputStream);
            clip.start(); 
        } catch (Exception e) {
            System.err.println(e.getMessage());
        }
        }
    }).start();
    }

    private void playMetronomeStrongBeat() {
        playSound("strong_beat.wav");
    }

    Instant start;
    Instant end;
    Duration elapsed;

    public void startMetronome(double bpm) {
        this.bpm = bpm;
        
        isMetronomeOn = true;
        
        
        while (isMetronomeOn) {
            start = Instant.now();
            playMetronomeStrongBeat();
            synchronized (this) {
                try {
                    wait((long) ((60.0 / bpm) * 1000)); // 
                } catch (InterruptedException e) {
                    Thread.currentThread().interrupt(); // Restore the interrupted status
                    System.err.println("Metronome interrupted: " + e.getMessage());
                }
            }
            end = Instant.now();
            elapsed = Duration.between(start, end);
            System.out.println("Elapsed time in seconds: " + (elapsed.toMillis()/1000.0));

        }
    }

    public void startMetronome() {
        startMetronome(bpm);
    }

    public void setBpm(double bpm){
        this.bpm = bpm;
    }

    public void endMetronome() {
        isMetronomeOn = false;
    }
}
