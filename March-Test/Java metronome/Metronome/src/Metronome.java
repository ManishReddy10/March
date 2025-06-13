import java.util.Timer;

import javax.sound.sampled.AudioInputStream;
import javax.sound.sampled.AudioSystem;
import javax.sound.sampled.Clip;
public class Metronome {
    Timer timer = new Timer();
    
    
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

    public void playMetronomeBeat() {

    }

    public void startMetronome() {
        // timer
    }   
    
    public void endMetronome() {

    }
}
