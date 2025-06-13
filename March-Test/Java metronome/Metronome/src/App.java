
public class App {
    public static void main(String[] args) throws Exception {
        double bpm = 210;
        System.out.println((60.0 / bpm) * 1000);
        System.out.println((60.0 / bpm) * 1000);
        
        
        Metronome myMetronome = new Metronome();
        myMetronome.startMetronome(bpm);
    }
}
